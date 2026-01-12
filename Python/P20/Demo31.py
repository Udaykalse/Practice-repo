from pytube import YouTube

YouTube('https://www.youtube.com/watch?v=TUpwQ6zT1cI&list=PLsyeobzWxl7omDoEYrrf3oXvXxa6MPgek&index=62').streams.first().download()