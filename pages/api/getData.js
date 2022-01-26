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
  console.log("\n...TOKEN DATA READY!...\n")
  return data.tokens
}

export async function getMetadatas() {
  const { data } = await client.query({
    query: gql`
      query Tokens {
        tokens {
          uri
        }    
      }
    `,
  });
  //fetch metadata
  const metadata = [];
  for (let i = 0; i < data.tokens.length; i++) {
    var response = await fetch(data.tokens[i].uri);
    var json = await response.json();
    metadata.push(json);
  }
  console.log("...METADATA READY!...")
  return metadata
}

export async function getOwners() {
  const { data } = await client.query({
    query: gql`
      query Owners {
accounts(where:{id_not:"0x0000000000000000000000000000000000000000"}){
  id
balances {
  id
  valueExact
 transferFromEvent {
   id
  timestamp
  valueExact
  from {
    id
  }
  to {
    id
  }
 }
  transferToEvent {
    id
    timestamp
    valueExact
    from {
      id
    }
    to {
      id
    }
  }
}
}
}
    `,
  });
  console.log("...OWNERS DATA READY!...")
  return data.accounts
}

export async function getTransfers() {
  const { data } = await client.query({
    query: gql`
      query Tokens {
  transfers(orderBy:timestamp, orderDirection:asc){
    id
    timestamp
    valueExact
    token {
      id
      identifier
    }
  from {
    id
  }
  to {
    id
  }
}
}
    `,
  });

  console.log("...TRANSFERS DATA READY!...")
  return data.transfers
}

export async function getToken(_tokenIdentifier) {
  const { data } = await client.query({
    query: gql`
      query Tokens {
      tokens(where:{identifier: ${_tokenIdentifier}}) {
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

  console.log("...SINGLE TOKEN DATA READY!...")
  return data.tokens
}

export async function getTokensIds() {
  const { data } = await client.query({
    query: gql`
      query Tokens {
      tokens {
        id
        identifier
      }
}
    `,
  });
  console.log("...TOKEN IDS READY!...")
  return data.tokens
}