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
        console.log("Error from POST API",error);
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
    let add_class = document.getElementById('add_class')
    add_class.addEventListener('click', addClass);

    let students_all = document.getElementById('students_all')
    students_all.addEventListener('click', studentsAll);

    function addClass() {
        location.replace("addClass.html")
    }

    function studentsAll() {
        location.replace("allStudents.html")
    }
    
}

workshop_pages.load_out = async () => {
    let out = document.getElementById('out');
    out.addEventListener("click", function(){
        localStorage.clear();
        location.replace("index.html")
    })
}
workshop_pages.load_back = async () => {
    let back = document.getElementById('back');
    back.addEventListener("click", function(){
        localStorage.clear();
        location.replace("adminPanel.html")
    })
}


workshop_pages.load_addClass = async () => {
    let submit = document.getElementById('submit')
    submit.addEventListener('click', addClass);

    async function addClass() {
        let name = document.getElementById('name').value;
        let major = document.getElementById('major').value;
        let credits = document.getElementById('credits').value;
        let semester = document.getElementById('semester').value;
        token = localStorage.getItem('token');

        let data = {
            "name": name,
            "major": major,
            "credits": credits,
            "semester": semester
          };
    
          const post_class = workshop_pages.base_url + "action/class";
          const response = await workshop_pages.postAPI(post_class,data,token);
          
          if(response.data['_id']!=null){
            console.log('success')
            location.reload();
          }
        }
    
    
    
    // token = localStorage.getItem('token')
    // user_id = localStorage.getItem('user_id')
    // console.log(token)
    // console.log(user_id)
}



