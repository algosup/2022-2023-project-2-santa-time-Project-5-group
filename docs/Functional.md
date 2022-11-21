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


## Requirements.

### Functional requirements

- The service will be able to take a postal address and return a time for Santa to arrive.
- The service will be able to take a coordinate and return a time for Santa to arrive.
- The service will be able to ask the client to accept the use of his location in order to use it's coordinates.
- The service will take into consideration the [Equation of time](https://en.wikipedia.org/wiki/Equation_of_time).

### Non-functional requirements

- The service will be able to handle 10k requests per minute.
- The service will not call an external API.

## Personae

<img src="./thispersondoesnotexist/dev2.jpg" alt="drawing" width="200"/><br>
Name: Marc<br>
Age: 22<br>
Education: Master's degree in computer science<br>
Background: Student<br>
Skills: Good knowledge of computer science<br>
Geography: France<br>
Platform: Web Desktop, weeks before christmas<br>
Goal: Find out when Santa will arrive<br>
Motivation: I want to know why this website exists<br>
Pain points or frustrations: I don't like to sign up to a service<br>

<img src="./thispersondoesnotexist/kid.jpg" alt="drawing" width="200"/><br>
Name: Lisa<br>
Age: 8<br>
Education: None<br>
Background: Child<br>
Skills: Knows of the existance of Santa<br>
Geography: UK<br>
Platform: Web Ipad the night of christmas<br>
Goal: Find out when Santa will arrive<br>
Motivation: Embush Santa to prank him<br>
Pain points or frustrations: I don't can't navigate interfaces that are not clear<br>

<img src="./thispersondoesnotexist/old.jpg" alt="drawing" width="200"/><br>
Name: James<br>
Age: 65<br>
Education: Right's degree<br>
Background: Retired<br>
Skills: Knows how to navigate a web page as long as it's not too hard<br>
Geography: USA<br>
Platform: Web Desktop 1 or 2 days before christmas<br>
Goal: Show to his grandsons when Santa will arrive<br>
Motivation: I want to see the exitment in my grandsons' eyes<br>
Pain points or frustrations: I can't navigate if the interface is using dark patterns, or if I have 5 pages to navigate through in order to have the result.<br>


## Objectives.

It will be a single web page with an input field. The user will be able to enter a postal address or a coordinate and the page will show the time for Santa to arrive on the page.

The service will be able to scale depending on the number of requests per minute.

It will be supported by the majority of current browsers OSs and devices.

If the user accepts the use of his location, the service will use his coordinates to calculate the time for Santa to arrive. However, it will not disable the search bar in case he wants to see the time for another place.

## User documentation.

Write your adress in the field. And press enter.

## Test plan.

The test plan is written [here](./Quality_Assurance\TestPlan.md).

## Marketing plan.

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

## The final product.

The mockup of the final product is [here](https://www.figma.com/file/Ad1soWlxQlV1hWfGDLaSYx/noel?node-id=0%3A1&t=2pMa35mv3Z7G65o9-1).<br>
The final product can be found at [xmas.algosup.com](https://xmas.algosup.com/).

