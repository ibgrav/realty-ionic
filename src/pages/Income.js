import React from 'react';
import Card from '../components/Card';
import Page from './Page';

import { useApp } from '../utils';

export default () => {
  const { search } = useApp();
  console.log({ search });
  const income = [
    {
      title: "RE Commissions"
    },
    {
      title: "Other 1"
    },
    {
      title: "Other 2"
    }
  ]

  const filteredIncome = search ? income.filter(item => {
    item.title.match(/1/g)
    const regex = new RegExp(search, "gi");
    return item.title.match(regex);
  }) : income;

  return (
    <Page title="Income">
      {filteredIncome.map((item, i) => (
        <Card
          key={i}
          subtitle="Income"
          title={item.title}
        />
      ))}
    </Page>
  );
};
