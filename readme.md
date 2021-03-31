# Welcome to Helping hand!

Join our community of anonymous philanthropists and helpers who want to contribute to their communities with good deeds.

As a **Creator** you can create a *Task* and award a prize for completing it. The task should have:  
+ `Title`: give a descriptive title that catches people's attention
+ `Description`: describe the task in detail, including the requirements that a *Completion* submission should have to be considered valid
+ `Prize`: the prize in tokens awarded for the task. This will be split between all successful *completions*
+ `StartedAt`: the time and date at which you want the task to be open for completion
+ `EndedAt`: the deadline for completing the task, after which successful completions will be awarded their share of the prize  

As a **Helper** you can browse the available tasks and complete them, taking care to follow the instructions given by the task creator on the requirements for the proof to add to your *Completion* submission. Your completion should have:  
+ `ImageURL`: URL of the location on a hosting service of the image that will serve as your proof of work
+ `ImageHash`: the hash of the picture, that the creator will verify against the image that you uploaded at the URL indicated in the `ImageURL` field  

The *Completion* will be initially marked as *Pending*, then upon verification the status will be updated either to *Approved* or *Declined*.  

# Development docs

**helpinghand** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport serve
```

`serve` command installs dependencies, builds, initializes and starts your blockchain in development.

## Configure

Your blockchain in development can be configured with `config.yml`. To learn more see the [reference](https://github.com/tendermint/starport#documentation).

## Launch

To launch your blockchain live on mutliple nodes use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)
