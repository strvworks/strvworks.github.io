var app = new Vue({
    el: '#main',
    data: {
        message: "test"
    },
    methods: {
        icon_click: function (event) {
            anime({
                targets: "#main-icon",
                rotate: 1800
            });
        },
        icon_over: function (event) {
            anime({
                targets: '#main-icon' ,
                keyframes: [
                    {
                        translateX: 40,
                        duration: 100
                    },
                    {
                        translateX: -40,
                        duration: 100
                    }
                ],
            });
        }
    }
});