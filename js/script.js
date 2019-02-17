var app = new Vue({
    el: '#main',
    data: {
        easings: ['easeInQuad',	'easeOutQuad', 'easeInOutQuad',
            'easeInBack','easeOutBack','linear'],
        move_text: "My name is stonriver.",
        messages: ['My name is stonriver.', 'My favorite editor is Vim.', 'I like ArchLinux.', 'I love information technology.',
            "I'm 18 years old.",  "I'm a student engineer."],
        message_counter: 0,
        page_state: 'home'
    },
    methods: {
        icon_click: function () {
            let rand = getRandomInt(5);
            let e = app.easings[getRandomInt(app.easings.length)];
            app.message_counter = (app.message_counter + 1) >= app.messages.length ? 0 : app.message_counter+1;
            app.move_text = app.messages[app.message_counter];
            console.log(e);
            console.log(app.move_text);

            var callBacks = null;
            switch (rand) {
                case 0:
                    callBacks = anime({
                        targets: "#main-icon",
                        translateX: [
                            {value: 0, duration: 0, delay: 0, easing: e},
                            {value: 100, duration: 100, delay: 0, easing: e},
                            {value: -100, duration: 100, delay: 20, easing: e},
                            {value: 0, duration: 100, delay: 40, easing: e},
                        ],
                    });
                break;
                case 1:
                    callBacks = anime({
                        targets: "#main-icon",
                        rotate: [
                            {value: 0, duration: 0, delay: 0, easing: e},
                            {value: 180, duration: 900, delay: 0, easing: e},
                            {value: 360, duration: 900, delay: 150, easing: e},
                        ],
                    });
                break;
                case 2:
                    callBacks = anime({
                        targets: "#main-icon",
                        scale: [
                            {value: 1, duration: 0, delay: 0, easing: e},
                            {value: 1.2, duration: 100, delay: 0, easing: e},
                            {value: 0.8, duration: 100, delay: 150, easing: e},
                            {value: 1, duration: 100, delay: 300, easing: e},
                        ],
                    });
                break;
                case 3:
                    callBacks = anime({
                        targets: "#main-icon",
                        scaleX: [
                            {value: 1, duration: 0, delay: 0, easing: e},
                            {value: 1.2, duration: 100, delay: 0, easing: e},
                            {value: 0.8, duration: 100, delay: 150, easing: e},
                            {value: 1, duration: 100, delay: 300, easing: e},
                        ],
                        scaleY: [
                            {value: 1, duration: 0, delay: 0, easing: e},
                            {value: 1.2, duration: 100, delay: 50, easing: e},
                            {value: 0.8, duration: 100, delay: 200, easing: e},
                            {value: 1, duration: 100, delay: 250, easing: e},
                        ],
                    });
                break;
                case 4:
                    callBacks = anime({
                        targets: "#main-icon",
                        rotate: [
                            {value: 0, duration: 0, delay: 0, easing: e},
                            {value: 1080, duration: 1000, delay: 0, easing: e},
                        ]
                    });
                    break;
            }
            anime({
               targets: "#move-text",
                translateY: [
                    {value: -200, duration: 500, delay: 0},
                ],
                scale: [
                    {value: 0, duration: 0, delay: 500},
                ],
            });
            callBacks.complete = function () {
                anime({
                    targets: "#move-text",
                    translateY: [
                        {value: 0, duration: 1000, delay: 150},
                    ],
                    scale: [
                        {value: 1, duration: 10, delay: 199},
                    ],
                });
            }
        },
        icon_over: function (event) {
            anime({
                targets: '#main-icon',
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
        },
        cursor_enter: function(event) {
            anime({
                targets: event.target,
                scale: [
                    {value: 1.05, duration: 100, delay: 0},
                ],
                easing: 'linear',
            });
        },
        cursor_leave: function(event) {
            anime({
                targets: event.target,
                scale: [
                    {value: 1.00, duration: 100, delay: 0},
                ],
                easing: 'linear',
            });
        },
        open_url: function (url, newWindow=true) {
            console.log(url);
            if(newWindow) {
                window.open(url);
            } else {
                location.href = url;
            }
        },
        change_page: function (state) {
            if (state === app.page_state) return;

            let tl = anime.timeline({
                targets: 'article'
            });
            tl.add({
                scale: {
                    value: 0,
                    duration: 800,
                },
                begin: function () {
                    anime({
                        targets: 'footer',
                        opacity: 0
                    });
                },
                complete: function () {
                    app.page_state = state;
                }
            }).add({
                scale: {
                    value: 1,
                    duration: 800,
                },
                complete: function () {
                    anime({
                        targets: 'footer',
                        opacity: 1
                    });
                }
            })
        },
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

