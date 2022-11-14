# Functional Specification

Clement Caton Last update : 14/11/22

## Summary

- [Summary](#summary)
- [Requirements](#requirements)
- [Objectives](#objectives)
- [User documentation](#user-documentation)
- [Test plan](#test-plan)
- [The final product](#the-final-product)


## Requirements.
<!--This is a formal statement of what the product planners informed by their knowledge of the marketplace and specific input from existing or potential customers believe is needed for a new product or a new version of an existing product. Requirements are usually expressed in terms of narrative statements and in a relatively general way.-->



### Functional requirements

- The service will be able to ask the client to accept the use of his location.
- The service will be able to take a postal address and return a time for Santa to arrive.
- The service will be able to take a coordinate and return a time for Santa to arrive.

### Non-functional requirements

- The service will be able to handle 10k requests per minute.
- The service will not call an external API.

## Objectives.
<!--Objectives are written by product designers in response to the requirements. They describe in a more specific way what the product will look like. Objectives may describe architectures, protocols and standards to which the product will conform. Measurable objectives are those that set some criteria by which the end product can be judged. Measurability can be in terms of some index of customer satisfaction or in terms of capabilities and task times. Objectives must recognize time and resource constraints. The development schedule is often part or a corollary of the objectives.-->

It will be a single web page with an input field. The user will be able to enter a postal address or a coordinate and the page will show the time for Santa to arrive on the page.
The service will be able to scale depending on the number of requests per minute.
It will be supported by the majority of current browsers OSs and devices. 

## User documentation.
<!--In general, all of the preceding documents (except the logic specification) are used as source material for the technical manuals and online information, such as help pages, that are prepared for the product's users.-->

Write your adress in the field. And press enter.

## Test plan.
<!--Most development groups have a formal test plan that describes test cases that will exercise the programming that is written. Testing is done at the module (or unit) level, at the component level and at the system level in context with other products. This can be thought of as alpha testing. The plan may also allow for beta test. Some companies provide an early version of the product to a selected group of customers for testing in a "real world" situation.-->

The test plan is written [here](./Quality_Assurance\TestPlan.md).

## The final product.
<!--Ideally, the final product is a complete implementation of the functional specification and design change requests, some of which may result from formal testing and beta testing.-->

The final product can be found at [xmas.algosup.com](https://xmas.algosup.com/).