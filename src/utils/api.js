import { fb_get_user } from './firebase';
const getUser = () => {
  const user = fb_get_user();
  return user ? user.uid : false;
}

const url = "https://re-budget-hasura.herokuapp.com/v1/graphql";
const secret = "re-budget-hasura-secret";
const headers = {
  'x-hasura-admin-secret': secret,
  'Content-Type': 'application/json'
};

const dataError = {
  status: 500,
  error: "missing required data"
};

const queryFetch = async (query) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers,
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({ query })
    });

    if (response.ok) {
      const json = await response.json();
      return json;
    } else return {
      error: response.statusText,
      response
    }
  } catch (e) {
    return { error: e.message }
  }
}

export const getAllIncome = async () => {
  const user = getUser();
  if (user) {
    const query = `query {
      income(order_by: {updated_at: desc}, where: {user: {_eq: "${user}"}}) {
        id
        user
        title
        description
        amount
        updated_at
      }
    }
    `;
    const response = await queryFetch(query);
    console.log({ getAllIncome: response });
    return response && response.data && response.data.income;
  } else return dataError;
}

export const insertIncome = async ({ title, description, amount }) => {
  const user = getUser();
  if (title && user && description) {
    const query = `mutation {
      insert_income(objects: {title: "${title}", user: "${user}", description: "${description}", amount: ${amount || 0}}) {
        returning {
            amount
            description
            id
            title
            user
        }
      }
    }
  `;

    const response = await queryFetch(query);
    console.log({ insertIncome: response });
    return response;
  } else return dataError;
}

export const createNewExpenseCategories = async () => {
  const user = getUser();
  if (user) {
    const query = `mutation {
      insert_categories(
        objects: [
          {
            user: "${user}",
            title: "Automobile Expenses",
            type: "expense"
          },
          {
            user: "${user}",
            title: "Home Office Expense and Deduction",
            type: "expense"
          },
          {
            user: "${user}",
            title: "Insurance Expenses",
            type: "expense"
          },
          {
            user: "${user}",
            title: "Office Expenses",
            type: "expense"
          },
          {
            user: "${user}",
            title: "Savings Contributions",
            type: "expense"
          },
          {
            user: "${user}",
            title: "Travel Expenses",
            type: "expense"
          }
        ]
      ) {
        affected_rows
      }
    }`;

    const response = await queryFetch(query);
    const affected_rows = response && response.data && response.data.insert_income && response.data.insert_income.affected_rows;
    console.log({ createNewIncome: affected_rows });
    return affected_rows;

  } else return dataError;
}

export const createNewIncome = async () => {
  const user = getUser();
  if (user) {
    const query = `mutation {
      insert_income(
        objects: [
          {
            user: "${user}",
            title: "RE Commissions",
            description: "Real Estate Commission"
          },
          {
            user: "${user}",
            title: "Other 1",
            description: "Additional Expenses Bucket #1"
          },
          {
            user: "${user}",
            title: "Other 2",
            description: "Additional Expenses Bucket #2"
          }
        ]
      ) {
        affected_rows
      }
    }`;

    const response = await queryFetch(query);
    const affected_rows = response && response.data && response.data.insert_income && response.data.insert_income.affected_rows;
    console.log({ createNewIncome: affected_rows });
    return affected_rows;

  } else return dataError;
}

export const createNewExpenses = async () => {
  return 5;
  const user = getUser();
  if (user) {
    const query = ``;

    const response = await queryFetch(query);
    const affected_rows = response && response.data && response.data.insert_income && response.data.insert_income.affected_rows;
    console.log({ createNewExpenses: affected_rows });
    return affected_rows;

  } else return dataError;
}

export const createNewUser = async () => {
  const user = getUser();
  let success = false;
  if (user) {
    success = await createNewExpenseCategories(user);
    success = await createNewIncome(user);
    success = await createNewExpenses(user);

    if (success) return { success: true };
    else return { error: 'error creating new user data' };
  } else return dataError;
}