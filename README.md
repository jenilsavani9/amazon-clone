

![Node js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

[![web site link](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)](https://clone-e4b53.web.app/)


## Amazon Clone

This is a clone of popular e-commmerce website Amazon. I have created it with React in frontend, Node and Express for backend and Firebase for storing data and stripe for payment processing.

### Features

- User Authentication
- Add to cart functionality
- payment with Stripe
- Sign In and Sign Out functionality


### Run Locally

Clone the project

```bash
  git clone https://github.com/jenilsavani9/amazon-clone.git
```

Go to the project directory

```bash
  cd ./amazon-clone
```

Install dependencies

- For Front-end
```bash
    npm install
```

- For Back-End
```bash
    cd ./functions
    npm install
```

Start the server

- For Front-End
```bash
  npm run start
```

- For Back-End
```bash
  npm run start
  firebase emulators:start
```

open http://localhost:3000/ 


### Database & Payment SetUp

#### Firebase SetUp

create Firebase Project and copy Your API key and change apiKey in ./src/components/firebase.js > firebaseConfig object.

#### Stripe SetUp

Create stripe Test API keys and change Publishable key in stripePromise variable in App.js File and change Secret key in ./functions/index.js stripe variable.

## Screenshots

- Sign-In Page
![signin](https://user-images.githubusercontent.com/74345702/157370529-db8aa62d-7edc-43ec-b852-f599b52b6cdf.png)

- Home Page
![home](https://user-images.githubusercontent.com/74345702/157370555-819645c6-4e21-42e7-be5f-f72660894cd0.png)

- Cart Page
![cart](https://user-images.githubusercontent.com/74345702/157370541-c78e3cc8-5e7f-462c-bd60-a9fcfa868c8d.png)

- Payment Page
![checkout](https://user-images.githubusercontent.com/74345702/157370535-e99826c2-89e4-4e90-a042-62d44fcadb83.png)

- Order Page
![orders](https://user-images.githubusercontent.com/74345702/157370550-ca2fda72-add3-455f-85fd-bcd6b062718e.png)
### Feedback

If you have any feedback, please reach out to me at jenilsavani1@gmail.com

## License


[![MIT License](https://img.shields.io/badge/LICENSE-MIT-blue)](https://github.com/jenilsavani9/amazon-clone/blob/master/LICENSE)
