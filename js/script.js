var app = new Vue({
    el: '#main',
    data: {
        message: "test",
        easings: ['easeInQuad',	'easeOutQuad', 'easeInOutQuad',
            'easeInBack','easeOutBack','linear'],
        move_text: "My name is stonriver.",
        messages: ['My name is stonriver.', 'My favorite editor is Vim.', 'I like ArchLinux.', 'I love information technology.',
            "I'm 18 years old.",  "I'm a student engineer."],
        message_counter: 0
    },
    methods: {
        icon_click: function () {
            let rand = getRandomInt(5);
            let e = this.easings[getRandomInt(this.easings.length)];
            this.message_counter = (this.message_counter + 1) >= this.messages.length ? 0 : this.message_counter+1;
            this.move_text = this.messages[this.message_counter];
            console.log(e);
            console.log(this.move_text);

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
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}