# Functional Specification

Clement Caton Last update : 18/11/22

## Summary

- [Summary](#summary)
- [Requirements](#requirements)
- [Personae](#personae)
- [Objectives](#objectives)
- [User documentation](#user-documentation)
- [Test plan](#test-plan)
- [Marketing](#marketing)
- [The final product](#the-final-product)


## Requirements.

### Functional requirements

- The service will be able to ask the client to accept the use of his location.
- The service will be able to take a postal address and return a time for Santa to arrive.
- The service will be able to take a coordinate and return a time for Santa to arrive.
- The service will take into consideration the [Equation of time](https://en.wikipedia.org/wiki/Equation_of_time).

### Non-functional requirements

- The service will be able to handle 10k requests per minute.
- The service will not call an external API.
- The service will be scalable thanks to kubernetes

## Personae
<!--
https://medium.com/an-idea/persona-understanding-potential-users-e66478e64fcc
    The Important Essentials of a Persona
1 Name and Picture. The name and the picture represent the identity of the character. It make the character seems more believable. So we must find a picture that best represents our potential users.

2 Age. The persona has to have an age that represents our target group. It helps us to design our product, for example, the theme and the style of a website.
3 Education. Understanding user’s educational background helps us dictate what kind of word choice will be used on product’s content.

4 Background. The background helps us determine the users’ motivation to use our product. The background can be represented by the user’s job.

5 Skills. Understanding the skills of our persona helps us discover how technically skilled our users are and also discover the users’ pre-existing knowledge before using our product. We can find out whether the users are experts or not.

6 Geography. It makes sure that our users won’t have the cultural or geography issues with our product’s content.

7 Platform. We must understand which platforms they are using to access our product. For example, if they use iOS devices, we have to make sure that our product will be responsive on iOS devices.

8 Goal. Understanding users’ goal helps us design a product that help users to achieve their goal. If they achieve their goal through our product, they will be so pleased and frequently using our products with no doubts.

9 Motivation. It helps us to understand user’s scenario on using the product.

10 Pain points or frustrations. It help us understand what the users don’t like. By understanding it, we can design products that avoid users’ pain points as much as possible so that the product will be comfortable for users.
-->

Name: Marc<br>
<img src="./thispersondoesnotexist/dev2.jpg" alt="drawing" width="200"/><br>
Age: 22<br>
Education: Master's degree in computer science<br>
Background: Student<br>
Skills: Good knowledge of computer science<br>
Geography: France<br>
Platform: Web Desktop<br>
Goal: Find out when Santa will arrive<br>
Motivation: I want to know why this website exists<br>
Pain points or frustrations: I don't like to sign up to a service<br>

Name: Lisa<br>
<img src="./thispersondoesnotexist/kid.jpg" alt="drawing" width="200"/><br>
Age: 8<br>
Education: None<br>
Background: Child<br>
Skills: Knows of the existance of Santa<br>
Geography: UK<br>
Platform: Web Ipad<br>
Goal: Find out when Santa will arrive<br>
Motivation: Embush Santa to prank him<br>
Pain points or frustrations: I don't like hard interfaces<br>

Name: James<br>
<img src="./thispersondoesnotexist/old.jpg" alt="drawing" width="200"/><br>
Age: 65<br>
Education: Right's degree<br>
Background: Retired<br>
Skills: Knows how to navigate a web page as long as it's not too hard<br>
Geography: USA<br>
Platform: Web Desktop<br>
Goal: Show to his grandsons when Santa will arrive<br>
Motivation: I want to see the exitment in my grandsons' eyes<br>
Pain points or frustrations: I can't navigate if the interface is not easy to use<br>


## Objectives.

It will be a single web page with an input field. The user will be able to enter a postal address or a coordinate and the page will show the time for Santa to arrive on the page.
The service will be able to scale depending on the number of requests per minute.
It will be supported by the majority of current browsers OSs and devices. 

## User documentation.

Write your adress in the field. And press enter.

## Test plan.

The test plan is written [here](./Quality_Assurance\TestPlan.md).

## Marketing.

martek.

## The final product.

The final product can be found at [xmas.algosup.com](https://xmas.algosup.com/).

