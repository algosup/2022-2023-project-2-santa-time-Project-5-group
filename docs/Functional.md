# Functional Specification

Clement Caton Last update : 18/11/22

## Summary

- [Summary](#summary)
- [Requirements](#requirements)
- [Personae](#personae)
- [Objectives](#objectives)
- [User documentation](#user-documentation)
- [Test plan](#test-plan)
- [Marketing plan](#marketing-plan)
- [The final product](#the-final-product)

## Glossary

Christmas is a religious holiday celebrated by Christians on December 25. It is a time for family and friends to get together and exchange gifts. It is also a time for people to give to those less fortunate.

GPS location is a system that uses satellites to determine the precise location of a device on the Earth.

Postal address is a unique combination of numbers and letters that identifies a specific location.

Coodrinates are a set of numbers that identify a specific location on the Earth.

API is an application programming interface that allows two software programs to communicate with each other.

Web desktop is a web browser application, as opposed to a CLI application.

## Requirements

### Functional requirements

- The service will be able to take a postal address and return a time for Santa to arrive.
- The service will be able to take a coordinate and return a time for Santa to arrive.
- The service will be able to ask the client to accept the use of his location in order to use it's coordinates.
- The service will take into consideration the [Equation of time](https://en.wikipedia.org/wiki/Equation_of_time).

### Non-functional requirements

- The service will be able to handle 10k requests per minute.
- The service will not call an external API.

## Personae

### Marc

[<img src="./thispersondoesnotexist/dev2.jpg" width="250"/>](./thispersondoesnotexist/dev2.jpg)

Age: 22

Education: Master's degree in computer science

Background: Student

Skills: Good knowledge of computer science

Geography: France

Platform: Web Desktop, weeks before christmas

Goal: Find out when Santa will arrive

Motivation: I want to know why this website exists

Pain points or frustrations: I don't like to sign up to a service

### Lisa

[<img src="./thispersondoesnotexist/kid.jpg" width="250"/>](./thispersondoesnotexist/kid.jpg)

Age: 8

Education: None

Background: Child

Skills: Knows of the existance of Santa

Geography: UK

Platform: Web Ipad the night of christmas

Goal: Find out when Santa will arrive

Motivation: Embush Santa to prank him

Pain points or frustrations: I don't can't navigate interfaces that are not clear

### James

[<img src="./thispersondoesnotexist/old.jpg" width="250"/>](./thispersondoesnotexist/old.jpg)

Age: 65

Education: Right's degree

Background: Retired

Skills: Knows how to navigate a web page as long as it's not too hard

Geography: USA

Platform: Web Desktop 1 or 2 days before christmas

Goal: Show to his grandsons when Santa will arrive

Motivation: I want to see the exitment in my grandsons' eyes

Pain points or frustrations: I can't navigate if the interface is using dark patterns, or if I have 5 pages to navigate through in order to have the result.

## Objectives

It will be a single web page with an input field. The user will be able to enter a postal address or a coordinate and the page will show the time for Santa to arrive on the page.

The service will be able to scale depending on the number of requests per minute.

It will be supported by the majority of current browsers OSs and devices.

If the user accepts the use of his location, the service will use his coordinates to calculate the time for Santa to arrive. However, it will not disable the search bar in case he wants to see the time for another place.

## User documentation

Write your adress in the field. And press enter.

## Test plan

The test plan is written [here](./Quality_Assurance\TestPlan.md).

## Marketing plan

**HAVE TO BE VALIDATED WITH JEAN-PHILIPPE AND FRANCK**

### Graphical identity

**TO BE DEFINE WITH JEAN-PHILIPPE**

### Social media

- [ ] Post on Linkedin
- [ ] Post on Instagram by ALGOSUP
- [ ] Post on Instagram by ALGOSC
- [ ] Repost on Linkedin by Franck Jeannin
- [ ] Repost on Linkedin by Eric L'Archevèque
- [ ] Repost on Linkedin by ALGOSUP
- [ ] Link in AlgoBot description

### Physical exposure

- [ ] Poster in the school
- [ ] QR Code at Epipapu (Vierzon)

### Event exposure

- [ ] Website displayed on the live of ALGOSC for the Telethon

### Will not be done

We don't want to limit our users base to be in Vierzon. So we will not do any physical exposure in Vierzon.
We prefer to keep it online and accessible to everyone.

## The final product

The mockup of the final product is [here](https://www.figma.com/file/Ad1soWlxQlV1hWfGDLaSYx/noel?node-id=0%3A1&t=2pMa35mv3Z7G65o9-1).

The final product can be found at [xmas.algosup.com](https://xmas.algosup.com/).
