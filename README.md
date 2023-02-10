# ResumeProject-frontend

Front end work for the [AWS cloud resume challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/)

This project contains a HTML static page that has a small amount of javascript driving a simple visitor counter on the page.

Additionally, there is a simple github actions workflow used to push the data into s3 and update a cloudfront deployment using an OIDC token on the master branch.  The project also contains git pre-commits to remove trailing whitespace and check the repository for secrets.
