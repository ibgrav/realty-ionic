import React from 'react';
// import Card from '../components/Card';
import { IonList, IonItem, IonLabel } from '@ionic/react';

export default () => {
  const expenses = [
    {
      title: "Automobile Expenses",
      items: [
        { title: "Auto Repair" },
        { title: "Insurance" },
        { title: "Wash and Detail" },
        { title: "Gas" },
        { title: "Parking - Tolls" },
        { title: "DMV and Smog" },
        { title: "Auto Lease or Payment" },
        { title: "Maintenance" },
        { title: "Licensing (annual renewal)" }
      ]
    },
    {
      title: "Home Office Expense and Deduction",
      items: [
        { title: "Electricity portion of total" },
        { title: "Mortgage portion of total" },
        { title: "Depreciation on Office Equip" }
      ]
    },
    {
      title: "Insurance Expenses",
      items: [
        { title: "Disability" },
        { title: "Life" },
        { title: "Dental" },
        { title: "Medical and Health" },
        { title: "Vision" }
      ]
    },
    {
      title: "Office Expenses",
      items: [
        { title: "Assistant and secretarial" },
        { title: "Education and Coaching" },
        { title: "Entertainment - Meals" },
        { title: "Office Supplies" },
        { title: "Dues and Subscriptions" },
        { title: "Misc" },
        { title: "Desk Rental or Office Space" },
        { title: "Signs and Materials" },
        { title: "MLS Dues" },
        { title: "Online Expenses and Marketing" },
        { title: "Phone" },
        { title: "Internet Charge" },
        { title: "Computer" },
        { title: "Postage and Freight" },
        { title: "Professional Fees" },
        { title: "Gifts" },
        { title: "Cell Phone" }
      ]
    },
    {
      title: "Savings Contributions",
      items: [
        { title: "Amount to Reitrement Account" },
        { title: "Amount to Savings Account" },
        { title: "Amount towards Tax Payments" }
      ]
    },
    {
      title: "Travel Expenses",
      items: [
        { title: "Meals and Entertainment" },
        { title: "Misc Expenses" },
        { title: "Air Fare" },
        { title: "Car Rental" },
        { title: "Hotel Charges" }
      ]
    }
  ];

  return (
    <IonList>
      {expenses.map((item, i) => (
        <IonItem key={i}>
          <IonLabel>{item.title}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};
