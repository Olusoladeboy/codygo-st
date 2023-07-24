export const handler = async (event: any, context: any) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            message: 'Codygo Lambda API Successful!'
        }),
    };
}