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

    let approve = document.getElementById('approve')
    approve.addEventListener('click', approveWithdrawals);
    
    function addClass() {
        location.replace("addClass.html")
    }

    function studentsAll() {
        location.replace("allStudents.html")
    }

    function approveWithdrawals() {
        location.replace("approveWithdrawal.html")
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

workshop_pages.load_allStudents = async () => {
    const container = document.getElementById('container');
    const token = localStorage.getItem('token');

    const get_students = workshop_pages.base_url + "action/students";
    const response_students = await workshop_pages.getAPI(get_students,token);
      
    for(let i=0 ; i < response_students.data.length; i++){
       
        const name_div = document.createElement('div');
        name_div.innerHTML = response_students.data[i]['name'];

        const line = document.createElement('hr');

        container.appendChild(name_div);
        container.appendChild(line);
    }

}


workshop_pages.load_withdrawals = async () => {
    const withdrawal = document.getElementById('withdrawal');
    const status = document.getElementById('status');
    const submit = document.getElementById('submit');
    submit.addEventListener('click', updateStatus);

    const token = localStorage.getItem('token');

    const get_withdrawals = workshop_pages.base_url + "action/all_withdrawals";
    const response_withdrawals = await workshop_pages.getAPI(get_withdrawals,token);

    for( let i = 0; i < response_withdrawals.data.length; i++){
        let newOption = new Option(response_withdrawals.data[i]['student']['name']+" "+ response_withdrawals.data[i]['class']['name'],response_withdrawals.data[i]['_id']);
        withdrawal.add(newOption,undefined);
    }

    async function updateStatus() {
        let status_value = status.value;
        let withdrawal_value = withdrawal.value;

        let data = {
            "status": status_value,
            
          };
          

        const post_status = workshop_pages.base_url +"action/"+ withdrawal_value +"/update_withdrawal";
        const response_status = await workshop_pages.postAPI(post_status, data, token);

        if(response_status.data['_id']!=null){
            console.log('success')
            location.reload();
          }
    }

}

