# Migration plan step-by-step

## Prerequisites
- Github repository
- Azure subscription

This guide should be followed on step-by-step.

## Azure Setup

1. Requirement, you should have a valid Azure subscription
2. Create a [Kubernetes service](https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerService%2FmanagedClusters)
    1. Select the right subscription
    2. Create a new Resource Group
    3. Chose the Kubernetes cluster name
    4. Select the Region
    5. Click on next step (Node pools)
    6. Click on next step (Access)
    7. Click on next step (Networking)
    8. Chose a DNS name prefix
    9. Click on next step (Integrations)
    10. Click on next step (Advanced)
    11. (Optional) You can chose a custom Infrastructure resource group name
    12. Click on next step (Tags)
    13. Click on next step (Review + create)
    14. Click on create
3. Wait for the cluster to be created
4. Go to the dashboard of your newly created Kubernetes service
5. In Settings > Automated deployments
    1. Click on Create
    2. Authentificate with your GitHub account
    - :warning: If you have an organisation read carefully the instructions on the dialog page
    3. Name the workflow
    4. Select the repository
    5. Select the branch (main)
    6. Select the Dockerfile path (./Dockerfile)
    7. Don't change the build context
    8. Create a new Azure Container Registry
    9. Create a new Azure Container Registry image
    - :information_source: keep those names in mind, you will need them for the next Major step (GitHub)
    10. Tick the Kubernetes manifest file
    11. Select the Kubernetes manifest file path (in .k8s/ each xmas-xxxx.yml)
    - :warning: Don't select cert-xxxx.yml manifests
    12. Create a namespace "ingress-nginx"
    13. Click on Review + create
    14. Click on Create

## GitHub Workflow
1. Commit & Push the next change in the freshly new pull request
2. In the xmas-deployment.yml manifest change the image (line 10)
- :information_source: the image should look like this: `registryname.azurecr.io/registeryimage:latest`
3. Merge the pull request
4. Wait for the deployment to be done

## DNS Setup
1. Go to the dashboard of your Kubernetes service
2. Go to the Services and Ingresses tab
3. You should have a service called "ingress-nginx-controller" copy its External IP
4. Go to the DNS zone of your domain
5. Create a new A record with the External IP of the ingress-nginx-controller

## Certificate Setup
1. Go to the dashboard of your Kubernetes service
2. Request a cloud shell (cmd icon, top right corner)
3. Use bash or powershell as you prefer
4. Show advanced settings
5. Select the right subscription
6. Select the right resource group
- :warning: It should be the same as your cluster, if not, you might have selected the wrong subscription
7. Chose a storage account name (lowercase, no special characters)
8. Chose a file share name (lowercase, no special characters)
9. Create the storage
10. Run the following command
```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.1/cert-manager.yaml
```
2. Create a new file with
```
echo "
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
 name: letsencrypt-staging
 namespace: cert-manager
spec:
 acme:
   # The ACME server URL
   server: https://acme-staging-v02.api.letsencrypt.org/directory
   # Email address used for ACME registration
   email: your_email_address_here
   # Name of a secret used to store the ACME account private key
   privateKeySecretRef:
     name: letsencrypt-staging
   # Enable the HTTP-01 challenge provider
   solvers:
   - http01:
       ingress:
         class:  nginx
" > cert-staging.yml
```
- :warning: Don't forget to change the email address
3. Create the ClusterIssuer
```bash
kubectl create -f cert-staging.yml
```
4. Create a new file with
```
echo "
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
  namespace: cert-manager
spec:
  acme:
    # The ACME server URL
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: frje@algosup.com
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-prod
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class:  nginx
" > cert-prod.yml
```
- :warning: Don't forget to change the email address
5. Create the production ClusterIssuer
```bash
kubectl create -f cert-prod.yml
```
6. Change the xmas-ingress.yml manifest according to your domain name

## Final step
1. Go to your domain name
- :information_source: Everything should be working now