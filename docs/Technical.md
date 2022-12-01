# Technical Specification

## Author(s)

- Malo Archimbaud

## Team

| Role | Member |
| ---- | ---- |
| Project Manager | Paul MARIS |
| Program Manager | Clément CATON |
| Tech Lead | Malo ARCHIMBAUD |
| Software Engineer | Laura-Lee HOLLANDE |
| Q&A | Guillaume RIVIÈRE |

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
The problem is worth solving because there is no solution available now to know when Santa will come with such a high degree of accuracy.
Also, this website is a good way to learn Docker and Kubernetes and implement what we have learnt.

### **1.b Glossary**

| Term | Definition |
| ---- | ---------- |
| Midnight of the sun | This expression means that we want to know the exact moment when it is midnight regardless of timezones, but rather by calculate with the geocoordinates |
| Docker | Docker is a platform which allows you to build, share and run applications on any server or platform. The app created is build in a container, which allows a faster deployment |
| Kubernetes | Kubernetes is a system for automating deployment, scaling and management of containerized application |
| Azure | Azure is the web sevice from Microsoft. Create kubernetes service, host a database and host your website are some of all the tools available |
| Nginx (pronounced engine-x) | Nginx is a web server on which you can host a website and manage load |
| Longitudes | Longitudes are invisible lines which are going from North Pole to South Pole. When going from a longitude to another, we are going from West to East. The reference longitude is the Greenwich meridian. The longitude is used to calculate the solar time |
| Latitudes | Latitudes are invisible lines parallels to the equator. When going from one latitude to another, we are going from North to South. The reference latitude is the equator |
| ° | the ° means degree, which is a subdivision of longitudes and latitudes. One degree difference between two places means 4 minutes difference between them |

### **1.c Goals**

As a user, I want to be able to know when Santa will deliver gifts exactly.
As a user, I want to be able to access the service through any platform.
As a user, I want to be able to give my location without any security issue.

As a developer, I want to learn new technologies such as Docker and Kubernetes.

### **1.d Out of scope**

- Display in real time where Santa is in the world.

- Display how many gifts he still has to deliver.

## 2. Solutions

### **Overview**

The proposed solution is to create a service which will be able to, thanks to an address, tell with a precision of one second when exactly Santa is coming to deliver gifts.
A countdown will be displayed according to the user's location which shows how much time is left until December the 25th, midnight of the sun.
The solution will be deployed thanks to Kubernetes service on Azure.

### **Front-end**

On the website, a search bar will be displayed in which the user has to enter the adress he wants to know when Santa will arrive. Then, if the adress typed is correct, a countdown until Santa arrives at the midnight of the sun at this adress will be displayed.
To calculate when Santa will arrive, we will add or subtract time depending on if the adress if at a negative or postive according to GMT (greenwich meridian). The countdown will be displayed in an DD/HH/MM/SS.
A Reindeer will be displayed on the bottom left of the page. It will tell the user what to type in the searchbar, or warn the user if what they typed in is in a valid format (For more info go see the [error messages](#3c-error-messages)).
In order to ease the use of the website by users, we will have cookies in which we will store the adress typed, that will be activited only if the user agrees to it. Thanks to this, the user will not have to type his adress each time he is going on the website.
The website will be accessible through any web browser.

### **Back-end**

The website will be deployed on an nginx server. The nginx server will take care of intercating with the database. We used nginx over apache because when we have to deal with peak loads and we need to have a fast website, nginx is better than apache.

### **Database**

For our database, we will use the data from [geofabrik](http://download.geofabrik.de). This dataset is quite heavy but it allows us to have a great precision, and it has also regular updates. The data will be stored in a photon database. Photon will allow us to store our data as we wnat and is better when dealing with huge amount of data.
In the case where this database is not fast enough or if its manipulation is too complicated, we could use data from this [dataset](http://www.geonames.org). This dataset is less precise because it only take in account the city and not the complete adress, but it is less heavier and easier to manipulate than the data from openstreetmap.
The database will store:

- The adress
- The postal code
- The longitudes of a place
- The country of the postal adress

## 3. Further Considerations

### **3.a Cost analysis**

- We will use the 200€ free credits provided by Azure, so the project should cost 0€.

### **3.b Security**

### Security threats

- Someone could get the address or the GPS coordinates of the users.

- A lot of people could try to connect at the same time at the service.

### Security measures

- The data that a user will type on the website will be saved only in cookies and if and only if the user allow the use of cookies.

- Thanks to kubernetes service from Azure, the website will auto-scale to adapt to the inflow.

### Privacy considerations

- Only the adress typed could be stored in cookies, only if the user wants to

### Risks

- The connection between azure and the website could crash, leading to an incapacity to access the website.

- If we run out of Azure credits, the website would stop working until we provide a credit card or a bank account that will be charged for using Azure services.

### **3.c Error messages**

| Errors | Meanings |
| ------ | -------- |
| "It seems that the adress you typed is wrong. You may have done a mistake" | The adress is not typed in a valid format. The user needs to type it again |
| "I can not find you. It seems you did not activite your localisation" | The user tried to use the geolocalisation feature but he did not allow his browser to have access to his localisation. If the user is on MAC, he also needs to allows the acces to the localisation in the privacy's settings |
| | |

## 4. References

- [TestDatabase.md](Quality_Assurance/TestDatabase.md)

- [TestPlan.md](Quality_Assurance/TestPlan.md)
