const workshop_pages = {};

workshop_pages.base_url = "http://localhost:3000/";

workshop_pages.getAPI = async (api_url, api_token = null) => {
    try{
        return await axios(
            api_url,
            {
                headers:{
                    // 'Accept' : "application/json",
                    // 'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + api_token
                }
            }
            );
    }catch(error){
        console.log("Error from GET API",error);
    }
}

workshop_pages.postAPI = async (api__url, api_data, api_token = null) => {
    try{
        return await axios.post(
          api__url,
            api_data,
            {
                headers:{
                    
                    'Authorization' : "Bearer " + api_token
                }
            }
        );
    }catch(error){
        console.log("Error from POST API");
    }
}

workshop_pages.loadFor = (page) => {
    eval("workshop_pages.load_" + page + "();");
}


workshop_pages.load_login = async () => {
  let submit = document.getElementById('submit')
  submit.addEventListener('click', logIn);

  async function logIn() {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      let data = {
        "email": email,
        "password": password
      };

      const get_user_login = workshop_pages.base_url + "auth/login";
      const response = await workshop_pages.postAPI(get_user_login,data);

      if(response.data['role']=='admin'){
          localStorage.setItem('user_id', response.data['id']);
          localStorage.setItem('token', response.data['token']);
          localStorage.setItem('role', response.data['role']);
          role = localStorage.getItem('role')
         
          if(role == "admin"){
          location.replace("adminPanel.html")
        }
      }
  }
}


workshop_pages.load_panel = async () => {
    token = localStorage.getItem('token')
    user_id = localStorage.getItem('user_id')
    console.log(token)
    console.log(user_id)
}

