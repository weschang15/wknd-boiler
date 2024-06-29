# The Wknd Boiler

Boilerplate for building out Node.js and Express.js API application. This follows a 3-tier project architecture.

## Example Project Structure

```
my-system
├─ components
│  ├─ health
│  │ ├─ entry-points
│  │ │ └─ api
│  │ │   ├─ controllers
│  │ │   │ └─ healthController.js
│  │ │   └─ routes.js
│  │ │
│  │ └─ domain
│  │   └─ services
│  │     └─ healthService.js
│  │
│  ├─ pokemon
│  │ ├─ entry-points
│  │ │ └─ api
│  │ │   ├─ controllers
│  │ │   │ └─ pokemonController.js
│  │ │   └─ routes.js
│  │ │
│  │ ├─ domain
│  │ │ ├─ serializers
│  │ │ │ └─ PokemonSerializer.js
│  │ │ │
│  │ │ └─ services
│  │ │   └─ pokemonService.js
│  │ │
│  │ └─ data-access
│  │   └─ pokemonApi.js
├─ shared
│  ├─ logger
│  ├─ authenticator
│  └─ imageResizer
├─ db
│  └─ node_api_exercise.sqlite
├─ server.js
```

With regard to building a REST API, this architecture enables you to break down each individual API endpoint into it's own component, allowing you to easily promote separation of concerns by building abstractions around data access, business logic and I/O logic.

### Anatomy of a Component

Components are composed of up to 3 different tiers.

#### Entry Points

These are where requests start. The goal for entry points is to accept a request, process it then return a response. In most scenarios, this will consist of an API entry point directory containing controllers and routes. In other scenarios, this can include a Message Queue entry point that exports a list of queues that are used throughout the application.

#### Domain

Domain directories consist of common objects like entities, serializers, and service clients. These objects typically call the data-access layers and return a response. For example, a Cache service, input validation, or filtering and sorting can all exist in this directory.

#### Data Access

The Data Access layer is responsible for providing an interface between domain/business logic and a data source. For example, an interface to retrieve data from an external API should exist here. Models would also live here where you'll write either raw queries or invoke ORM functionality. In addition, the responses returned from these data access layers should return transformed/serialized data so that the domain layer can work with clean, consistent and expected data.
