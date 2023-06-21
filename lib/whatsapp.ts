export const generateWhatsAppLink = (contact: string, message: string) => {
    return `https://api.whatsapp.com/send/?phone=${contact}&text=${message}`
}
