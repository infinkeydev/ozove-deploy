Next Js version: `13.4.19`

Node version : `16.17.0`


Need to follow this steps to run the project:

Steps - 1

First need to install package using this command
```bash
npm install
```

Step - 2

Run project using
```bash
npm run dev
```

Steps to create the build:

Step - 1

First remove the .next file using this command
```bash
rm -rf .next
```

Step - 2

Create the build using
```bash
npm run build
```

Step - 3

Run the created build using
```bash
npm run start
```

## OZ OVE

It's a Static UI Project. The First page after runnig the project is the Landing(Pilot) Page. From here you can navigate through all rest pages via header.

There are Basically 13 Module or Pages in this project:

- Landing( Pilot ) Page
- Home Page
- Ride Individual Page
- Ride Business Page
- Delivery Individual Page
- Delivery Business Page
- Apply to Drive
- Fleet Management
- About Us
- Conatact Us
- Career
- Blogs( Blog List )
- Blog Detail

## Environment Variables

In env file we have currently set some functionalities like provider, port, email address etc. it can be changed by modifing the env.production file.

There are field for:

`NODEMAILER_SERVICE` which is used to select the service provider like we used Gmail as provider, user can change it according to their preference

`NODEMAILER_PORT` which must be set according to preferenced service provider, like for gmail it's 465

`NODEMAILER_USER` is the configuration to set the email address who will send the email to the users

`NODEMAILER_PW` is the password for the email Id.

`NODEMAILER_EMAIL` is the configuration to set the email display text to the user