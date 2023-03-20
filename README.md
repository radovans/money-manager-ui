# Money manager

Multipurpose application for managing home finances.
- process monthly bank statements and apply rules to categorize transactions
- track past transactions and create spending reports
- plan future transactions and create budget reports
- track assets and liabilities

## Run

### Build the Docker image for the current folder and tag it with `money-manager-react`
docker build . -t money-manager-react

### Run the image in detached mode and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d money-manager-react

## Application

### Template
I originally started with this [template](https://youtu.be/0cPCMIuDk2I), the code can be found [here](https://github.com/ed-roh/fullstack-admin) which I gradually modified according to my ideas. In the project I use redux, Material UI components and Chart.js

### Dashboard
![dashboard](https://user-images.githubusercontent.com/3687019/225699653-a721076f-6179-4338-97bb-af9b2c45b2d8.png)

### Transactions
![transactions](https://user-images.githubusercontent.com/3687019/225699635-5d5c5824-400f-4a9c-b87b-750349890b56.png)

### Editing transaction
![transaction](https://user-images.githubusercontent.com/3687019/225699602-ae07067d-a417-4c94-896a-8c870947cbc0.png)

### Balance
![balance](https://user-images.githubusercontent.com/3687019/225699576-1640484b-f6d1-47d7-babd-aaf75ac9fbdd.png)

### Incomes
![incomes](https://user-images.githubusercontent.com/3687019/225699554-b06bb73b-da90-4876-829a-11b322234d74.png)

### Categories in bar chart
![categories-bar](https://user-images.githubusercontent.com/3687019/225699515-56e39508-623b-4f3d-8c19-269ed25cdf83.png)

### Categories in pie chart
![categories-pie](https://user-images.githubusercontent.com/3687019/225699448-5c0105be-889a-47c0-8c4a-7dea8ccd9220.png)

### Cumulative balance
![cumulative](https://user-images.githubusercontent.com/3687019/225699426-4c2fa2f9-a49d-4566-83f9-39215e721d40.png)

### Subcategoy management
![subcategories](https://user-images.githubusercontent.com/3687019/225699396-7327fb47-c56f-44c7-8470-7ea966bd214f.png)

### Recipient report
![recipient-report](https://user-images.githubusercontent.com/3687019/227804499-fcf11403-6763-4d9e-924f-540b1947a4ff.png)