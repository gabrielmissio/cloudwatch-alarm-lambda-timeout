exports.handler = async () => {
    console.log('I will sleep until "timeout" is reached')

    await sleep(10000) // 10 seconds

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Dude, You need to set the timeout to 10 seconds or less.`
        })
    }
}

const sleep = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
)
