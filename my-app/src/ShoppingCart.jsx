// ShoppingCart.jsx
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: 499,
    description: "High-quality cotton t-shirt perfect for casual wear.",
    image: "https://th.bing.com/th/id/R.6c3ddd4f609acc5e3fff3e13255cfc15?rik=WjyNdapUp8CmaA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fyck%2fgA5%2fyckgA5qai.jpg&ehk=FhdTQmR%2fg2dheR19WIlGsPfHtVFVhdFhlEYM97RT8YM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Cool Sneakers",
    price: 1299,
    description: "Comfortable sneakers for all-day wear.",
    image: "https://th.bing.com/th/id/OIP.SbkfeE4ySWM0nYVhEzE5DQHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2999,
    description: "Track your fitness and stay connected.",
    image: "https://th.bing.com/th/id/OIP.WGOZNjuNIvkVixSj9rQBcAHaIs?w=145&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Backpack",
    price: 899,
    description: "Spacious and durable backpack for everyday use.",
    image: "https://th.bing.com/th/id/OIP.NaKtPEDg8_4_VW22_miO_QHaHa?w=161&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 699,
    description: "Stylish sunglasses with UV protection.",
    image: "https://th.bing.com/th/id/OIP.dI01xddu6WkPEuHnpYcnzAHaE8?w=291&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 6,
    name: "Headphones",
    price: 1599,
    description: "Noise-cancelling wireless headphones.",
    image: "https://th.bing.com/th/id/OIP.YHiT00itiA6eZuMd9h2m0AHaHa?w=205&h=205&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 7,
    name: "Water Bottle",
    price: 299,
    description: "Insulated stainless steel bottle.",
    image: "https://th.bing.com/th/id/OIP.ZeaBDPUKo-ftH_oh7SXDFQHaHY?w=181&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 8,
    name: "Hoodie",
    price: 999,
    description: "Comfortable hoodie for all seasons.",
    image: "https://th.bing.com/th/id/OIP.GKUJU3E9IgYXuSmjxKKIUQHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 1999,
    description: "Portable speaker with deep bass.",
    image: "data:image/webp;base64,UklGRjgiAABXRUJQVlA4ICwiAADwdQCdASpDAfwAPp1GnUqlo6KhpzOsgLATiWlu/GugK6nbAvgRxf1AbZvzAfq56/+mAbzd5OWq2S3+OH6PwX/kv5Hnq26/3/A37hKRuwv9v/jfQI9U/5L+m+XDso+X/3D1jJk39jo19Mu9FPMf8nj3/mvUc/wn+F9Ov/8/+f4R/vJ///eH/eA+xJSlKUpSlKUpSlKUo5Wmb3zmMfdnXTACNIr/Hx8M1p1fCc6zWve973ve9e3CYdtbYPG3kdsYxS63Xt9I6EMzqA0Ov7ozPwSXQzSkdBlKqvFegPonku4QDZo74DZK+itGYwJV9xY/c8NtznWBVhaj2+GBR4ItLwIrx9P5g6sLW2LxblyzYQMFzREDGVccFJmGds/gKvVqu1kTfp1Asj3GWlxd3TCO3U0o7Tq0LdJpETWgUBxAs7hvn/bweKT0JtBDivZGRZuRAznN7ZNKZmkeBTfzrxzKMKsO+Gy3jQ2gkAziPm+x2pjOHVSPJqSvkSnM9jBdqkwPH44hoW6bz9QIK4x7RIQvNnRNyIO10P14te8maG+C8noaeVLF2eceZer6yTc/BVW48pJtTq3Na9Ca4L9w1QF1Xc2UalysXTHJU+ExX1WhqSYIHMrtCWNeGuYLVHYn5DNB+HA5YB4sOSafYf34SWEuXMqQpCXSLX3OO48ihhSQjEQ0sIkBQLVCyFsuSIKKmB9O+H4ckyKbuC3goP/tC8YC5AN+KA2UxU9Zse9aXwHaPvsSetCQ8w1eRxGY51z4BmGUw/HS9WzCdO28469ijLPYXHfIPBDa5Bp9jOKr9XMhlAGmCw18TVrkbDzpBFGdlZaapZDrRkBWycm8PwWLHLe1Op9EJOuL/OJpUGjdvm3/Q2myR4yTzex0kQKh9NbCHEqPeJfJiqwaK5B93Aqhz3abUAJ9EJemCEBu2nHYzaOiBEPVim/dFo0Zh3FJ84NxgDkvLDy0HrlnHfyq0A6VkaqYJw/vGfaGJ6jphQRH+0ECct1wT3JFJWNMNsfB0a+E/yMbmGU6FQjHYhLa5bMPGHKjjlnmUpzADW2yrfFo/qrmMqbVpk2M7Ra6s6EpFdLQ9yWWGbS9h8blK/YOrzgHxVBGgIzzTp4aSadV3rh1B/fg3y79mpDt2+qwv7OhZx+vQN18oiydqAZznN/EX/hwkazZLPnH+ld7CYDNXqW1CKa8qCFlkJ86ie+u5undVpuA/I8WcsgOqNODOc5vz8Rx8hKu8orE4aNoRhtufw37UJtL6973ve973ve9uKqwAP76toARZkmu3zCxBfZHK/GeHOfPry7B8U9KweMNHVpwWhVdZzOsr3Ltue3ySTN2ANrK3Ow0+GaxLCI+QjokBuLu/TLG+KIoahcO8dYAD5dAAbpdh/CGkoMC+BcXMK+FzbuSUsCZgonjaQdPM84dICBlFd9fIh3tg170X3mQW/qjtWSSgfLH6EL+xHOPw5nZuAPjaT3Fnam0ofrzcbME15WoYqshQGU9/n/Ut8AQxzpGBK8VprfKwgmw8dbwz/sa1IYqihxuG/2PtfCnhOoDhKezg+lQm4ALtzEHS+p4rVFTCGDLssAvjcU8GoSwtYSv3+sjF+UpxmdvdAxWQGndK7r8Q09PLVDTQ3oEpA0oToHMx0B/S+QK9i0B2sbZgy2ZYXidrmZiEqVWvSPj+NA/HukQBBf3xggHTZPUqqZbKcDRwnBS9UZQa0uWow/nCo5dxMc5QrTOjtg+k5m+QJTpPyDXs7lZuehO6VLh7y7/KXXAkKE5xAVQBp1F+P4Th0GnUTZ9/8qH65BdUpbbYCn2HtCRqmvlD3a47DC2dbnfqAQbpJnd4vvhtUjFHm9sxqrTm+qrbI3yYRUSPybbGve64FME3mWw+U0lle/+gFe0gu3y28qUZ5PEyLBQWWel1QqDuuHL+TZfIwYXTy+xZIuvCvnjRlgZMpYa/48ARj7UrPgBH5WXHR0X8sTygCLkT8HcDvreShQiS9ORM8DoMPqWNaXLrAPBEgFQpYfv+gezbmOrz5jq2JlJpm92/PHNiqk9yzCZBmgXW83cqU3bTHge+9br2KsSnE64nS54pdVics/+eDDQpr/g/D5ZcQcPxHxQjRt7k9s/45wKYRbzWMZSUcdRJziypjhjrxeCbl+2uGLqtx1S+n28lirzigP7pG6Muun4zP/5iFKv+uYj/zUZWlFV/EbPvZUb1P40nAysAri9vyg/uMfk2jib8uwAC2Z4AsRpaif2C3q0oJtKinUbR0XEkggiR3uigpRt7Iia5btnLOgJ4fx4aWdcZ9/3bKDW+Y29qbTAIbsMTMU1RzvjzcV6Z+qs6QpEfrgyxVvLItTL7BvcaE1/JspdU1RBP2Hhw/H/xA0dvl733x/9GEAvn/Y9/0ZBodHMFq4Y0NF/DmgfNx+rNcz0tpkT5sIkuQdVp6tCh35OfZElC6tsGP2J5XCdn2U393PVtIpx0nVLakF+p2dkbVum502vh9bAbfDb7HIMQqxdI64GoFToEyc7fCY//gnSIYQ8VBaGbZfZFdX7aQdbJHm9AgjuKDA0Go9oFST0riUcWw7h+EOysHhBrmQJHIBlEBS1rUsHg9qURnbOXgfNgsf8vAh1A8KQ9G6N6yLIMcRUAOvnkrARrfXbKjk4J4KOoGd3PMUukUNwOggAEk3Iax/8oZPoPtEyIg/8zEY0HTOq6rT5l6ycKiFMwv4Gp6YMzJAhwc0EUhPZJf9aet9nzTNCljtXmxerfD9kdedTABD3ebM7tL6j9aWFGfV9aE+ePMvMjiuLsd8xgs/7rHC7F8omQ/VbmJ2ZT3DhvUFoTPnJbi8Tgrqj0+E3a2fllTFi0axFzx7W+xXhez6cL7JWUNTbdI2uGByLiFwx2zkc1Qc3ugiO76E+LXR28Dw5kErWIxZ+bpCPrsnipPxRa/fd5YEVxGF7HkdHzYgTXdDCngFm+W2SUVDhv7YFCQmalqTBuBaXf+CxHHSpEFXmDN7HHlAQCdJ6WV7k1hvrSfjaf/MHo8EigWPZ9uQw977f+mrBrOHSljzgL0LcL6r+JXcHoUVCNHYkV/7uVYIPclXrah+/JoSwlnHprt+LJC/pEF/YX3jpjBJNMrtX0E/8EvUTy2BT3+r7fzqqwsx6V8xwj0IrHPAnsfi40LI30vJm3dBZDmvLyHHqxmB/tQ3hRwU0vgHMrmPOFrM6WlHo6y/RtGl2mMwN8L/trpHnbnuvCG/gp9iGH+dgb/XqXJizG5H7BE5C9tfSqHn+cR2B2h+WvztExPTiOb6x7T5VCsyGYvA7x6nICoR6seqvys0lt0noObmcJmIMgGrJh9Fpg8KAbP6GdlabKSrDzkswUML/Czez6vsVZBwxr63tzXtupWwUovhO6IxgVcw+5VyN+tccNw8xdxklMufZ96mCtdcyRjBRi+H2I+Ohp4aOJqlgKkIDy5QQqv2asPwqRRraqK8ZpEbiwZn0U+loyJn2uAmR8B5pN0goQdRFvfTJw+fZx+kG9m/2HgRBWUP7QoEfGbI5vPZ2wIC3z9nZwWTLjI6fGAhpdletf1/cuOGV+1erel/FG0qzhQ87UYRyTnVpkLLWChVYors6EhrHuPJzKc00ZKwS8WceZGhqMFc3lt/PFM0lPTN+Itze7CDPxohLaBWOT5uamGujxFeEcqROVDxlMfrGixtbCoA9mh3HOMNvTDg9Z9LZUIe8Hzvj7Tza0eUG+F1oTwnXxoFtDjw0gVtnVpHMqaT9yDF5vrC5bqrFL7QqFW0e0FjAWDFAMnL8XkHArcsk9ejLeQMa0f7fZGNRLvoAa62BHoZJRB9Kg3+loiatoC14+hEBavl+1TVRtb7qHzzL90SL54T5gqCz2ysc6Dh8twJXEBSKiHjhGyTz/sIA6B+rfmHRq4Qyelr7sEzsKhubJGue8MV3Y1Wil5746M0FVubkCb1DucrVS5B8PJffEzlJ7vmZ89wr0gqAf0OdDr5AvoeAJnKpspyvwrC+wCuIxTjmCbMqBgBv+lS5F+a2GoXdRRIX8isZBWaYoqsqzXNa5yPnorGlubBi8p4YcmFxkPewLbZAbMKElA06OamHkF2wIfiT7WI8qLAlpoawjmwCKZupxGbOX8AGFzDQOJKX0QlR1iEb4xTnCQQMTFikQvUMmYJkE9P3ptld5DDK1Qb22ayl7eeeZiNur9m/XZX4oatEzyqUngc2gSwSKnlJbMl4ZjK9WJmcFlNRcVFEnLr3OUrlHVnlmPKfW3Uu7odFP1D6ipnAP3xF4N+Eg66jQWGY1xUc9sxf6k4LSHXf4kt1FICJg5lfjAIem8bNl14LbuKTbDIISO6TxovvzzqSwaMRz/QxLaJQ1OOJKH5Tjr4hEmoldD+rL+75yMtHaiCqQj6k92PkLrED2JE8xW3yDTRp1Nf9fDQoF4seaCYtvEKAOHQBBBs75/Mo7w/upXJxupAqZpWYXP4kuErba9RTnsEEkXm/R+bWDL5WjhvLDIYCGobtSgAqHfShy//OsMFTmjOl0OrPp5Ou/asEKhT+SGDLnNHACH5am6gq+rLbeeQE3EZG8JLrd06LUnSUoQ4wLdCY3WpcumYxfQb9GQkuX3CJIuYXUnM3wZzMr3KStx1F300YZhRVhy/DaFTL6cSWRwqt9d8CsrHzZ+N54NJ0xJGd5Nj+he/hmY/g8LJGk1dKI/prhEMqygpw4wlKh7B7oEbwd4SaSb+/O0drSpnyATCyZpPLJRKKupx3fxW2ACttHla/ndI+qiE+ivlTE5SxbFkzzwkrRao7NvAtq1kNQX1Uuhc7GnBUeG/4vi8Xi7G7w261BGfn+tKNeIX0EeQ9veLQyHmS65RtMSgZjqFXdx/9AM1M1zohkgelh+7jLR0pxzan/PJIV/OfqX1w0OgBUGqSjFaxgjA6xnc1RiF4JEnCHf0PW+L/UU3zfo9fn0nIm/mF+hOf+A2lclJy0uipWkW/kYSS1v6k4yVsmvq7XAaGnnsXnIoU4wC0dTZu/RSyyaouxVKefLg1QGSGlO0o7in9GroOeXeIVdshLClJX1OmVP5qNk6z3iA4PPXCdXKxdgoDCbWZ09/EAl0/CzCUhgN7/btkkDlBbRAyWqklTsETjvUpWL8VfZ8mxMG4Hv5SpBY9ZDaJBItTb5pkloIKFNzTiA7e8A0JWmY9bu2TAUzWk4MmVO3heWT1zPYienL1xIE6lfeS3qgitojDNLDdjtINzx7KHKxtuZMFwoRH0fHdUZY+wuKj+TyyQRdAMhsGHa01uNaWXUH1PE3sm7dMHXuNXqe1bpHWXf4l9hpZnhPqFoAQfqg2NuLLqK4KxwYMMnJqhGFWiW7VBS2uRIMRRNv0ToDutCPjy3rB3nAiOffs4CtDd3QZ5U3hSC+oiGmukWnPu6VOe+3iQtI5xh7R1RNRDFhAkCOx5hUID1/q+GC6MKNuvZ1EuuoQKb8OeeaegYUDtyVtMVyFInmOfpk+g+367M85iN0aBWQhQ/ycY5+udCbfwXgeQLWUPud3XNZg19gYGB18XVJI7DBg/Zc6LIgdcesC0eZY/fQfY8GE/GRzc/kbDD7cLKX2NnvIAXmYrafV5Mq0lSyCF7zSkUsWM2xCdVIAw1g1VdTvd27/GhjUk1Kc2xoEHGzxWiukOXV4lhbIIQ3c6nVNidYxa5Fx7ZAYhigijjOWHR1XjoSCUJm0AGeCYTEppZ9IlhFojMjNCdsueMzvbAezZvgNNLJbo8cxFXr0iaDV7PjEPtJ3Gu8uWbF9aqsTKJFMlVIAr7VbodiUY+mKdQ0XRcHlsshYL0MjvP84+k5wVj3eEN7t190wM5ppG1kXndgGd/ewbJfhfE1llQjsovwa8kk+kU4hzT0T33QSHeJZag5Oai4JtaLdV7eMqmmqo171JeXCQojFZNrifk62uPovsQZH7q29s+ZeNGQzb3jiBPwPyJ/mMg9y485SR4rovlpuncIcS37fVKJWM6Nq1G0DghK72VV9d39CZjEdjDbewB8Yf+7cyf6Ve3KuESVdICAzs4G06gestZwlgpRODvHNyCeMh6i3vSHyG50ECwhvQw2mnP1QqFECAqer8QpJYHhvI0oQFm3nqWPPPS23uWASuMnxyv+XdTCltgzVduRvpN72PrpmF/mJgcasTXQ8PxcWZ5Y+23pbLLcfxQU/Vy24PKxcVIqEyCOkyLBkoZE94zjXm3pkbsHFCUHXhWDY2N/IaBDy1Fq0dbc4I+GKPiHoo6kXxSBcuIQxYhoVSLz9iyilKmuW8gxMNtYtR1eeW5Uy3csDgUdxklJWTG1Xa5Q0evNUUottN2qKKOFtuC76orwdHkZRVkPSKxNrC5kjHMI+ItCvy3+gXHtV93EqAxHnvsiZxMZn0mJp8EC8tGfb1kOj9xAyIFvG/ZRA5v8kpIlJVA0ECsM75vvmZgXsSdv3irjwsWleEoC0lGOanHJn/j4Aq6V50ZfP03U27f3+Uddw+3gpHCxBk8BpnjaFTRtzvY8FKh8uYjihjZjHow1yDc4wf9LaARuIda4EIllMC/KUWH9WX2ZrVwV/pkCegqL1hHSvS/kUi1FFySaxv9xCcrH+yGg63n/r5/w9QYXjyLwDQhxH3NubQZ8p7IIqfVhNBDYNjeRgLhlbPtwrn7dOJV4yyR/5gzo7MfQscPwPdRYeOyN+Q6Z2QUtsRc8qZ7GTPDwXTZtL/C5t7Itxlsb6i36bBQYg3GFuCV5Xl2kvLOmqaAYvBi+/l6p81T52s34+/8hSinU9yfDD2OzqIU09ZuFjrZFxRziNJEF11kxY4ZE7+Hjc1+V5enlywLSuQbOQmv9Eta4xFtHJC6YDCuy/ItZBMJWSHsF3akRQ272acq9W889sGKJpqkliBU1Kvk3skg5TzHMvtNCgeYRj66ncITAkCONQC6hGGoToOoPsH4iZXg8SHQ5OfCr/SivKY8+DOwWy525bpqpR5KPtdIasaBJW7/zDFFOZp8Gagd+QX3VEx6nzc6Ek1cUjavT+/hO5J2Y9G00Bj3R/neuv2HvB6IhDNN01P3iMZ2gHjTUHTyI4RIgpCOQZksO3OqPqA3AzXWE243eeMhiqRtpf27uQcnkHGSc54TdF03omiOhyaWqOopU2rM32oGtudvuqvG6VpBMmlO5AyapHZYCtJDqfK8hSr39lzW+/GtcuMqh4OKoabAJx/yAM5Li9Q3CFVLAiwoaO3IydVAg1fTIfUkYUXCHOrxN6D25KnZ+oNN7zmQBqp2R220WwYs0/MpvR+N6ZZSXjlUe56Ww16bczDuGch6fmGEGT9cXl8JuwsUU/snuaf6x4a0hFrdS1Bh9/fp/Jen956zN0e9ObFEU8GcGZ1M22IsPjb9dMS7NJP8ggQivNeNC7KG8oVSdp3+MTiSuMoVd9eM+Y9SBE99ruB4eDSPTpLC4wG6g4Vo22VABQPYIfV4RimtZ5LaMcWEqwg0lZi9+RFVM0rPyXr0Fk9shsmkhroSyP0dAL5H4BWSQasCB49zkqo9rBhPPCuA3WACDdHlgDsBsq6DvKDHGi9GGm2BaeaGRw0kLpeG3ZiGt+gYB9YNhcciTw8auLJOEH3MAF39Mi97LB2eeNP4mLRlgBjNyml5ua2OAEogL1Wn94OcDZA72hB46FLPkNoFvU1oyxci4noH0NIq2bfStoIcRr4FCzbji0jwde8w4Va7PHJ/UhI5J/sodL1oubAJ+AABkHtod4LhrxNBSQdaCmRIwjS5XNgSkpBPXn6bXjqGPMgo9zl1T0pOOw134F4xy35MDSLLTZKudgQ54gIiuMAJl6fedhzF09gzY5gu+mr/l0MzKEIlSI4ekul1e1NRh3YEXwEIw89dAvDAXWyJGijV26P4l+qidIQcG2GDEmUXSTQJ5sxoTEfOj2/IVhJQ0cVJmhPsdaS6oyNJtsUbWxJE9iNXImdnaK0el3/e8YKZD5f64w1KW0gwQ9Z9oxTh0zKgb6j8snVFTA8UDbBkGz8yojQZB2oOxWlz5mK/3ZKBoSQWvLCXzbZIISM76x2pUJuL/IPMuBEAXiGRPwgTOR/DgnGj6W0CZxjr/x2pPHW3vtrE0d3+03GZ+aIKNaTnY1nZitIakxe86nRS1OB4oA3PSG5SNw2Iai5KCsWTC719MvZtrZY+5ng3oeNTOvit40Osiyew/MfqEkI4mz1imiNZD8C/nBcfj/6P7Dh9KGXiQ8J4oal23wsbwRqrTgo4Ss6nnKrhT4+VaX7eeVQK1yPnTYf3JAT0OUJtAW8x8FQX1TcnWOLFaYMeBYk8AhZxJk80ZMu5tMhy9w5pYotXDMqZIh3ZjVMV7dkeoXckbuGg07fbW9uT//caTO0fXuhpdIAggP+4ByU4gK7H7xzKaYEQ4HpBu0WNRCYFfjKm1H40PxZ0fNtzZvuJMCMWLFe5Wh4SvyXzw40BWA8Q6FeCMGJTMLWfzEO61NDQUdGndv1BtSkbpTBQBooq+OWEo0KUNTRuayIGX6hlkN8d6lY9hqP58xo7LbFkU4bsEC2kqc4il3W0I+FSLjQdXEGilX3J75rFpldoNj/cFcleaJho/KLAPb2S1pT3t7F3OnPCvFV2gXpPZeH3No5cZC7dlkDeZBt7+C93Aqj6O3fyzrllrShZ18dyvXRnCKdZ+ruRMhiGKBW9UGPz5hg5znB61FW7wtz/oPeq7J1iVdOFbz/uGKCEuWtv3UC+6Ibk16FA/QLKDguJ2ElVmUpEy1eoUdjdrRtD+in5KiwY/eVI5ObKNfDpuJb0WQV/IDKsgHNJegZ8G63npJkDjSF39w27oTPUGsDsjZffPs3UtlWaFbk3jls066w/iR76VbnIDaCYZ/9IH3HOLQEjABGtbmNhLWTve8tDr+6dMWI69QUqXMSvq/j8XohR/4BsfNpdIn8BZu5n3qgOHA/2BkIiu0jLC3CmQARUPUohDRSgIFyJ2wvuZwzxgKOcpRd+ureirVMOvYL1MAufzaD45O5wCWqsFi0TY6YoFfrUDbx8YliDU7MuXdF8BIldj4tRf9lAWBNFFP9DVumDjQSRQyCUCN5hwuWWbkRmMiDzf94OLLtsdGGZrsAvmKsS8KUxjpQEasC1vFjtdDpaCOrhTWauX+ao10ug267ivqGc/LVmAbOLBpvqrqboNyM/APIQB8RLfCX8YmJXTT4BtB6ZD0X6l2nXlQUg67bSz//E7KhHDqPvUDL4D4IAKUvErt4maX2aCyw0fOTDXsgoK3N024qe3ib1EgvDaiWvjWPWPhjJoui/R3rU4Df7oZWHRXJOW57wubk21g+FB3aYxYlp5GQgSltuIK8BUosZWWG+FjwMPUtu7T3kL0xB9znqlKJTi5rwHXvywmaOenb4c/gA/YKBbN8ilv0L1XxQpa4+NlsqnnjmopkR+GUPUAqN9iIb/UziMJQHquPJ10xE42/xvW9nobODgMA8vtnz6+KRjsIlLSn7DyMVMP0l04WXJkHcZK/ecRyS3GADoxjjm319c0T2b8mqhjvQGj6jhxsGGHmKMCwVP9JDH27UU+9l7J/OppQjJ68gOe+Rzj0IK5ZtBmfM3cLRhSgMGpyuDHBr5K/H3oTQCwCHUXBg5GyMvHlH1p4CZgfxQE92orSaCd3FJaRcn4be7uORBuPXvPfnwnkHjouN2JLr54dtqvPdh06Vpe/Vo8u+7Dv2X5nicOPS/my6YzQu2ZKLcIvZ5FxENxXl4bw7CybipIZSjb4/4RtWHxLf/6gnt8vm8UfvI3j/DzWQX+U52ewf7oM4U2H0ED+dGMIWKmBiuJmyrriS3V2864y2mDm3lDg5GtSf+B6CbbzOjXOTxPhDLUIIfjRQSWlGtdrUZrj9GQrLunB9PmhdlJQmBbNBs4fiS8qK+Ncj+vPUEsqztUX6iL6G65JVasihNqKOzOuatgeBBslg2Q3dlNjNlhPRylF+uP+g8iJUEDntMsO0o0949NpDLvFTni/KnvlyDtyqkE3ujJwEGDPHF1pQBBjtAeX7zJMPUXcAeY383Z5HDkHjrQYYfcqvdy5hIuWGNKqIDewHYaWrlXF9ni+itSA8v2HZ/dsLIQ+1vUABlDb+q1M+/DyH4hhunITxR71G36npYRj8OYX5K3eKpK34wsPobeslkETFLXcJ74bjQCdKloS4vuVR6uZnigIKt6QMsdjNGeMthY1XIlUHb57LrD+UtRQ3tMkVGEZ0NBjYCoUbNg/B7EdAmx9tIBouzdMT9+mgk/eY7Tmc/0B018/9JEZ2fGVFlOE+YUWzdltHJKwtxmmkzMu30PeaDBmT5CKMofxTRio6uFnpX3txrqxTyJpCQ5QS5be08c4aqR5UVUkfwnRBMlwhUzNFSU4za1lban0Vb6x51KSrcPcnAmjZ/pvfY21PAEa/5cy462yBZ8Ul6Vg7O/JqcggOF3cPPYulUTMlCuS8Y5FbywRurVDrZB5dqewFElknTIERtLG9pQzVAqBbyns8159vuQCse5lo7vAovUdPjnGt4sry198j9nOjywxOFDD3loj9e/39NOMJzbB156qnKB/WGr+lAwkNxX3YhDxe/btu6lbsz473b9mH16WUcN4jn8ky0DJHwTmoRrMF5+9ghvC9clpBk6crtizPv1L2PP/MsbAcRNacZ58Mdp9YJgjnSwGJerrYYPWGT7whrkZgvbDhKPlyJfBZU96J81XQOutRb/LpTG7RnFTCcYlLy0G2akvBLkfohZHou2ndV0Igd53z1VwRmB2eBeq7uqe+sm3uTnoA6B8/0eApvw+kWxbMYzteKmir2Dfa423NXjP0Qce/+bleixBUIzAvkz9EyeDCTRCWMKfQp61utwLbzyh8WPHufxzYxKr7if7IOXCvdL4gzcYAX0BWN6YTcdxtVBvEjhvehC13o0VJ8LlrMbYVD9KgUw/golcRWTq9hJ+5Mzu6C4cZGDLyG81IArKTDmYulSQk3ntoXPE3R1v5ruDAGShJJqKEVqb3+5ZTge2AIBst2aj4+R7v1QeZVi2xxNk7P7omB7wfK35gDYx99DDDeYqUNMrlWQkwjJ00iOHH1QVJZPsC/8GoMCuVgmsCBpp/s/CS08KJyZXis+cyIo5sm1+uqOAPeVO8yNNiwH9VSp+EJRoVxNAVVU6/A6fMSNPl9EnHz20AUwWNCVSbY+werfzrwPScr1xzYBOI6fm/NhGZgyximSSDXANL7qw/+VioZb+KwLisBa0zLgyaGiI7Ji8uw7tABgauf4YFcq4EEHgDffBoksmKsYItebnFhk9Ydc6lQFl2IBRD5n4zlULqTi0Es06cy5+0RP9lWiO5QvtLpyO5GXTSExg4BI11DkCsUpefIJX7nCy3iQsLKp7Gcy4hDgaWp019ytf/UZGFO5ixbDMUg+hka7sNFrnhyYYB4zJu11+rDRBsCBUeLvzTHURgmkO86fw09J1XPAcHki6ZdpmCR6Jf0oAIIUfh2bbJln7/ttkD3ZB4GY76xccFoTJXsXFkTSM0fnpvNrAmmCWMmvTMASNOkE7/h78b3YYqfBRb1tjCXS+KDLvBhXm0MW7cpHXVCGh1EkAn2x451lud9Z7ayByB9oPasvYcyQwrFQwUqb3mC1nYcJroUJVsMb1SD58d+pBkcvtAtLyo/suVANFha6oaUH7kIzForKi0voUKC9lP4iP7vQan3zX3EU6BDiD6V7M9AKdhTdzzEAA6QIAAA=",
  },
  {
    id: 10,
    name: "Cap",
    price: 299,
    description: "Classic baseball cap.",
    image: "data:image/webp;base64,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",
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const increment = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const decrement = (product) => {
    setCart((prev) => {
      const count = (prev[product.id] || 0) - 1;
      if (count <= 0) {
        const updated = { ...prev };
        delete updated[product.id];
        return updated;
      }
      return { ...prev, [product.id]: count };
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCost = Object.entries(cart).reduce(
    (acc, [id, qty]) => acc + products.find(p => p.id === Number(id)).price * qty,
    0
  );

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">ShopEase</h1>
        <div className="cart" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({totalItems})
        </div>
      </nav>

      {showCart && (
        <div className="cart-details">
          <h2>Your Cart</h2>
          {Object.entries(cart).length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {Object.entries(cart).map(([id, qty]) => {
                const product = products.find(p => p.id === Number(id));
                return (
                  <div className="cart-item" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <p>Qty: {qty}</p>
                      <p>Price: ₹{product.price} × {qty} = ₹{product.price * qty}</p>
                    </div>
                  </div>
                );
              })}
              <h3>Total: ₹{totalCost}</h3>
            </>
          )}
        </div>
      )}

      <section className="products">
        {products.map((product) => {
          const quantity = cart[product.id] || 0;
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decrement(product)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => increment(product)}>+</button>
              </div>
            </div>
          );
        })}
      </section>

      <footer className="footer">
        <p>&copy; 2025 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
// Shop.jsx
/*import React, { useState } from "react";

const allProducts = [
  { id: 1, name: "Denim Jacket", price: 1499, image: "https://th.bing.com/th/id/OIP.scN3Nz6oXkojkVv_MC2ctQHaJx?w=208&h=275&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 2, name: "Headphones", price: 2499, image: "https://th.bing.com/th/id/OIP.vh2FSVY3fjEgpvsPtVhPbwHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 3, name: "Mobile", price: 18999, image: "https://th.bing.com/th/id/OIP.40yOILhZJMXfBXbio3C6tgHaHh?w=193&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 4, name: "Graphic Tee", price: 499, image: "https://th.bing.com/th/id/OIP.m5n64Wsb2ewNfqFnVbMKOgHaFL?w=278&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 5, name: "Laptop", price: 79999, image: "data:image/webp;base64,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" },
  { id: 6, name: "TV", price: 49999, image: "https://th.bing.com/th/id/OIP.5jVRkirfxMHI22dUkchRIgHaE8?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 7, name: "Sports Shoes", price: 2999, image: "https://th.bing.com/th/id/OIP.IR4Tx_kgpYI_XrKYaZMjFQHaFD?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 8, name: "Casual Shirt", price: 699, image: "https://th.bing.com/th/id/OIP.VTz2_6SyTL9POqVYs8LZgAAAAA?w=208&h=271&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 9, name: "Leather Belt", price: 399, image: "https://th.bing.com/th/id/OIP.QHskROez3jJbvELgk7_u3gHaIO?w=169&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 10, name: "Wallet", price: 599, image: "https://th.bing.com/th/id/OIP.hwL3Aulk6id2loWYuH2KmQHaH2?w=156&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
];

function ShoppingCart() {
  const [cart, setCart] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const count = (prev[product.id] || 0) - 1;
      if (count <= 0) {
        const copy = { ...prev };
        delete copy[product.id];
        return copy;
      }
      return { ...prev, [product.id]: count };
    });
  };

  const totalCount = Object.values(cart).reduce((sum, val) => sum + val, 0);
  const totalPrice = Object.entries(cart).reduce(
    (acc, [id, qty]) => acc + allProducts.find(p => p.id === +id).price * qty,
    0
  );

  return (
    <div className="shop-container">
      <header>
        <h2>QuickShop</h2>
        <div className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
          🛍️ <span className="badge">{totalCount}</span>
        </div>
      </header>

      {isOpen && (
        <aside className="cart-drawer">
          <h3>My Cart</h3>
          {Object.entries(cart).length === 0 ? (
            <p>No items yet!</p>
          ) : (
            <>
              {Object.entries(cart).map(([id, qty]) => {
                const item = allProducts.find((p) => p.id === +id);
                return (
                  <div className="cart-line" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>₹{item.price} × {qty}</p>
                    </div>
                  </div>
                );
              })}
              <h4 className="total">Total: ₹{totalPrice}</h4>
            </>
          )}
        </aside>
      )}

      <main className="product-grid">
        {allProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <div className="btn-group">
              <button onClick={() => removeFromCart(product)}>-</button>
              <span>{cart[product.id] || 0}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </div>
          </div>
        ))}
      </main>

      <footer>© 2025 QuickShop. Built with React.</footer>
    </div>
  );
}
*/



export default ShoppingCart;
