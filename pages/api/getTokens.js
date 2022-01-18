import { gql } from "@apollo/client";
import client from "../../apollo-client.js";

export async function getTokens() {
  const { data } = await client.query({
    query: gql`
      query Tokens {
      tokens {
        id
        identifier
        uri
        transfers {
          id
          timestamp
          transaction {
            timestamp
          }
          from {
            id
          }
          to {
            id
          }
      		valueExact
        }
        totalSupply {
          valueExact
        }
        balances{
          id
          account {
            id
          }
          valueExact
        }
      }
}
    `,
  });
  //fetch metadata and merge in query result
  const tokens = {};
  const array = [];
  for (let i = 0; i < data.tokens.length; i++) {
    tokens[i] = [];
    var response = await fetch(data.tokens[i].uri);
    var json = await response.json();
    tokens[i].push(json);
    tokens[i].push(data.tokens[i]);
    array.push({ ...tokens[i][1], ...tokens[i][0] });
  }
  console.log("\n...TOKEN DATA READY!...\n")
  return {
    props: {
      tokens: array,
    },
  };
}
