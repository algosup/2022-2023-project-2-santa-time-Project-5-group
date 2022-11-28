# Technical Specification

## Author(s)

- Malo Archimbaud

## Team

| Role | Member |
| ---- | ---- |
| Project Manager | Paul Maris |
| Program Manager | Clément Caton |
| Tech Lead | Malo Archimbaud |
| Software Engineer | Laura-Lee Hollande |
| Q&A | Guillaume Rivière |

## Created on

- 12/11/2022

## Last modified on

- 25/11/2022

## Summary

- [1. Introduction](#1-introduction)
- [2. Solutions](#2-solutions)
- [3. Further Considerations](#3-further-considerations)
- [4. References](#4-references)

## 1. Introduction

### **1.a Overview**

Our goal is to create a service which will be able to tell when Santa will come to deliver our gifts at our address to the second. Santa will deliver the gifts at midnight sharp depending on the sun. The website will be deployed thanks to Docker and Kubernetes. The project will be accessible through this [website](https://xmas.algosup.com)

### **1.b Glossary**

- Midnight of the sun: This expression means that we want to know the exact moment when it is midnight regardless of timezones, but rather by calculate with the geocoordinates

- Docker: Docker is a platform which allows you to build, share and run applications on any server or platform. The app created is build in a container, which allows a faster deployment.

- Kubernetes: Kubernetes is a system for automating deployment, scaling and management of containerized application.

- Azure: Azure is the web sevice from Microsoft. Create kubernetes service, host a database and host your website are some of all the tools available.

- Longitudes: Longitudes are invisible lines which are going from North Pole to South Pole. When going from a longitude to another, we are going from West to East. The reference longitude is the Greenwich meridian. The longitude is used to calculate the solar time.

- Latitudes: Latitudes are invisible lines parallels to the equator. When going from one latitude to another, we are going from North to South. The reference latitude is the equator

- °: the ° means degree, which is a subdivision of longitudes and latitudes. One degree difference between two places means 4 minutes difference between them.

- PostgreSQL: PostgreSQL is a relational database which is used to store and scale the most complicated data workloads.

### **1.c Context**

The problem is worth solving because there is no solution available now to know when Santa will come with a high degree of accuracy.
Also, this website is a good way to learn Docker and Kubernetes and implement what we have learnt.

### **1.d Goals**

As a user, I want to be able to know when Santa will deliver gifts exactly.
As a user, I want to be able to access the service through any platform.
As a user, I want to be able to give my location without any security issue.

As a developer, I want to learn new technologies such as Docker and Kubernetes.

### **1.e Out of scope**

- Display in real time where Santa is in the world.

- Display how many gifts he still has to deliver.

## 2. Solutions

### **2.a Current Solution**

There is no solution available now to know when Santa will come with a high degree of accuracy.

### **2.b Proposed Solution**

The proposed solution is to create a service which will be able to, thanks to an address, tell with a precision of one second when exactly Santa is coming to deliver gifts.
A countdown will be displayed according to the user's location which shows how much time is left until December the 25th, midnight of the sun.
The solution will be deployed thanks to Kubernetes service on Azure.

On the website, a search bar will be displayed in which the user has to enter the adress he wants to know when Santa will arrive. Then, if the adress typed is correct, a countdown until Santa arrives at the midnight of the sun at this adress will be displayed.
To calculate when Santa will arrive, we will add or subtract time depending on if the adress if at a negative or postive according to GMT (greenwich meridian). The countdown will be displayed in an DD/HH/MM/SS.

For our database, we will use the data from openstreetmap. Everything will be stored in an SQL database, PostgreSQL.

### **2.c Test plan**

For the test plan, we can refer to the TestDatabase and the TestPlan. Everything is explained in the documents linked in references.

## 3. Further Considerations

### **3.a Third party services**

- No third party services will be used

### **3.b Cost analysis**

- We will use the 200€ free credits provided by Azure, so the project should cost 0€.

### **3.c Security**

### Security threats

- Someone could get the address or the GPS coordinates of the users.

- A lot of people could try to connect at the same time at the service.

### Security measures

- The data that a user will type on the website will not be registered anywhere to be sure that nobody can access a user's location.

- Thanks to kubernetes service from Azure, the website will auto-scale to adapt to the inflow.

### Privacy considerations

- No data will be stored by the website.

### Risks

- The connection between azure and the website could crash, leading to an incapacity to access the website.

## 4. References

- [TestDatabase.md](Quality_Assurance/TestDatabase.md)

- [TestPlan.md](Quality_Assurance/TestPlan.md)
