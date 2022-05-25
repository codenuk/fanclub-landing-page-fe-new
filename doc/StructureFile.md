# Folder Structure Conventions
> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── components            # Contain all component
    ├── config                # Config all library about { apollo, axios, react-query, theme, menu }
    ├── container             # Contain all container
    ├── doc                   # Documentation files
    ├── form-validators       # Validate input with library yup
    ├── hooks                 # Contain all API call with hook 
    ├── i18n                  # Constants multiple language { th, en }
    ├── layouts               # Layout web site
    ├── pages                 # Caontain all page
    ├── queries               # Constants query and mutation of graphQL
    ├── services              # Service about authentication and cookie
    ├── styles                # Globals css
    ├── utils                 
    ├── .env                  # Environment in develop
    ├── .env.production       # Environment in production
    ├── package.json          # The package. json file is the heart of any Node project. 
    └── README.md
