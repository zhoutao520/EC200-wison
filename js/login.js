var vm = new Vue({
    el : '#app',
    data : {
        user : '',
        password : '',
        msg : ''
    },
    methods: {
        login () {
            if (this.user == '') {
                this.msg = '用户名不得为空！';
                return false;
            }
            if (this.password == '') {
                this.msg = '密码不得为空！';
                return false;
            }
            localStorage.setItem('userId',this.user);
            location.href = 'index.html';  
        }
    }
})