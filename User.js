class User{
    user_id='';
    username='';
    email='';
    password='';
    api_url='https://62c9a448d9ead251e8beab03.mockapi.io';
    
    create(){
        let data={
            username:this.username,
            email:this.email,
            password:this.password,
        }
        
        data = JSON.stringify(data);

        fetch(this.api_url+'/Users',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:data
        })
        .then(response => response.json())
        .then(data => {
            let session= new Session();
            session.user_id=data.id;
            session.startSession();
            window.location.href='hexa.html'
        })
    }
    getSession(){
        let name='user_id=';
        let ca=document.cookie.split(';');
        for (let id = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)=='') {
                c=c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }
    destroySession(){
        let cookies=document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos= cookie.indexOf("=");
            document.cookie=name+"=;expires=Thu,01 Jan 1970 00:00:00 GMT";
        }

    }
}