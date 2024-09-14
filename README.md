
Modified from [PDS Account Migration](https://github.com/bluesky-social/pds/blob/main/ACCOUNT_MIGRATION.md), please read that first before proceeding.
I put some configuration to make other people easier to run the script.

⚠️ Warning ⚠️ ️
Account migration is a potentially destructive operation. Part of the operation involves signing away your old PDS's ability to make updates to your DID. If something goes wrong, you could be permanently locked out of your account, and Bluesky will not be able to help you recover it.

# How to migrate your account

- Modify the variable at the top of migration.ts to your own values. if you use handle outside of bskt.social, you can use the same value in `CURRENT_HANDLE` and `NEW_HANDLE`.
- Run `npm install` to install the dependencies.
- Run `npm run migrate` to start the migration process.
