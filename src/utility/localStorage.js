const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations')
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return [];
}

const saveDonation = id =>{
    const storedDonations = getStoredDonation();
    const find = storedDonations.find(donation => donation === id)
    if(!find){

        storedDonations.push(id)
        localStorage.setItem('donations', JSON.stringify(storedDonations))
    }

}
export  {saveDonation , getStoredDonation}