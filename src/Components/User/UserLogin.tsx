import FingerprintJS from '@fingerprintjs/fingerprintjs';

export let Userid: string = "";

const UserLogin = () => {
    const fpPromise = FingerprintJS.load();
    fpPromise
        .then(fp => fp.get())
        .then(result => {
            const visitorId: string = result.visitorId;
            Userid += visitorId; 
            console.log("Updated Userid: ", Userid);
            console.log("Visitor ID: ", visitorId);
        })
        .catch(error => {
            console.error('Error loading FingerprintJS:', error);
        });
}



export default UserLogin;
