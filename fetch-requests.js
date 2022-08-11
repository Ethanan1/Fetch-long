/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch('/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

async function first() {
    try {
        const url = '/products'
        const options = {
            method: "POST",
            body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
            headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
            }}
        const resObj = await fetch(url, options)
        return resObj

    } catch (error) {
        console.log('Error: ', error)
    }
}

first()
/* ============================== Phase 2 ============================== */

// Your code here



/* ============================== Phase 3 ============================== */

// Your code here
