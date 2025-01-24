import umami from "@umami/node"

umami.init({
    websiteId: process.env.UMAMI_WEBSITE_ID!,
    hostUrl: 'https://cloud.umami.is',
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload)
}