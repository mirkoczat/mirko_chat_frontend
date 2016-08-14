export class Dummy {
  data() {
    console.log("Loading test data...")
    var ms = mirkoczat.stream
    ms.doRoomInfo(
      {"users":[
        {"sex":"","login":"@mirko_chat","id":"-576460752302404495","color":"#3f6fa0","banned?":false,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAUGBwED/8QAFgEBAQEAAAAAAAAAAAAAAAAABQMH/9oADAMBAAIQAxAAAAHHyazufaRPIKekbkw1yCsLLaKGEgf/AP/EABwQAAIDAQEBAQAAAAAAAAAAAAQFAgMGABYBFf/aAAgBAQABBQJq1syU/eaHg9brmE7AfupXt0QDh4EJnh7GKQ2hKhlOdL11+JprHh8wijCjrctZFbntBsyBi/dvu92+5q7ZurP/xAAmEQABAwMDAgcAAAAAAAAAAAABAgMEERIhAAVBEyIUMTJCUVLw/9oACAEDAQE/AXom+GatLMnosg0SAeLkt+lI+xFamuanTMOYZAibg4twKSa3Us8q9vuuSRkj5zwDu8qGqa634tQFVYS3juKVHNwJyAeMjGos7b9rfVKacU65QgXJoM8k3qJ/Z1//xAAnEQABBAECAwkAAAAAAAAAAAABAgMEESEAEgUiQRMUMTJCUVJhgf/aAAgBAgEBPwFqVwYREqej9q6RaiR12qX5lH4g1QrFDTsuIGDKgoS2UqxV7vGub07VA4B9sfXC40sRG191STQyV55QpIxtIGCfw51JhzuIspjONpbbsHCrOOgG1I1//8QAKRAAAQMDAwIFBQAAAAAAAAAAAgEDBAAREgUTMSFBFCIyUZMjM0JSof/aAAgBAQAGPwJrR9HjtCosiTzxN3IyWvus/AlbcFkXVTlAjItqV6bEGNNjyNt0hbxyS3dPepLsuaY7EQTVlsfMSY+/FaY9F0YCDULifiVzUbfyhY0FvbNvUDNy5Y9EJcV69uKmG7PSSayhzeFOirh2p97w+7uwBbxytyidajQUNBGISqyQeq9635kg3T/YyvTkucu2DspNtS/Ly0AaXGbH6QqZuNIpEtcsfAlcsfAlI5qEnPH0iiWRK//EAB4QAQEAAgIDAQEAAAAAAAAAAAERACExQRBRYXHR/9oACAEBAAE/IRR0OKXvrxClI1hj7DWct9im3AhE1hkbF7amOn5iQtQeS9zrIbqYOHeRIYV7zI5Y9g4HuZXpdSvgPrA1IUgVW3GrwShT1kqHtPRcfMINv8hgCeV10FRhH4wz/9oADAMBAAIAAwAAABBZxNT/xAAZEQEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQMBAT8QONRzhBMUEgpWqr7lNK2bYRQAAiB4DB1tAis5vQHg+uXoGtIvgAwCqlAd/8QAGREBAQEAAwAAAAAAAAAAAAAAAREhADFB/9oACAECAQE/EHsRYa030KCQJdB44GI5UFsFCqGkXh/yfGqDeTyt7Hh98hyrQRKprgDBXn//xAAdEAEBAAIDAQEBAAAAAAAAAAABEQAhMUFRYfDB/9oACAEBAAE/ELp+PAleB6OrCBtLn8HzK/CqPTgPrgNZ0ghvIEN+GtMBHK3UaXB9CvhvF16gQCqhreiALjpXPs6USU2nDFGbear1EkFkgACATAqgrik07IPU3eTHa6UXX7hYQIB3vA6GUxcBXQeGsl1X0bFrmhLxR8xK1TsCAtSAHfPUz9J/M8vyfMA3INVlnAWFeWG9Gf/Z","anon?":false,"admin?":false},{"sex":"male","login":"M_M_W","id":"-576460752302404527","color":"#ff5917","banned?":false,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAAMBAQAAAAAAAAAAAAAAAAUGBwID/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQIAAwQF/9oADAMBAAIQAxAAAAFA7UMLcyei1uuFoKBCZnNcXKWUEav/xAAcEAACAwEAAwAAAAAAAAAAAAAEBQIDBgEHEhT/2gAIAQEAAQUCW/LfY8mBU4XijEhusrq53OdyIPlvHmmmTs17KtyeWGHbqtSM2hzNuJZrRYhvNbGrbrB9FQQwglvO761tBzq0pPRS/wD/xAAgEQABAwMFAQAAAAAAAAAAAAACAAEDERIxBBQiUfDx/9oACAEDAQE/Ad0JC1c/EdksQv2mfkg1DWBHT2V//8QAHREAAgIBBQAAAAAAAAAAAAAAAQIAEQMSUWHR8P/aAAgBAgEBPwGqbRLZSRGZBmrjuADIWb20/8QAMBAAAQIEAwQIBwAAAAAAAAAAAQIDAAQREgUhQQYTFDEVIiNRYZGh8ENjcYKSosH/2gAIAQEABj8CRfs5NStwo2+/KkJV41HKHG5nDHJs8WshluXuNu8I/kOGRltwsEXNLbsPvKApGDzigdOFXkfKMJkHcPbRv5JbiEt6UdWKfpCHujaGYnEIS7dVKCVLI0+uukOuHDVy/UaIqu66pVnyETCpdbRWhoIcbatFMknlTxjCWRJuUlsFQiYJaNEKU46aH8olMTdS5wLTqXVZGhKb6Z/cfOJl3GuyvZbTLF5BAVbXL1iY2lTsy+JiZRa4Ez4t0+TXSFspf6zyw4vutAOUIcBNEN0Ap3ez5wgWOUcfXzpkFaekILzTVNwU9m1Q/D11j//EAB8QAQACAgICAwAAAAAAAAAAAAERIQAxUWFBcYHB8f/aAAgBAQABPyEMHzaCXQfOPjeTo3211KQScsg7mZJZhSL7XgyiVGwjXQMhQ6JIw6dH3yAiL6A1LMo9J4ZoioYEYJXXePr4dKFsYtfZV4Ll4ARYVZPePRpLEQ0W0Yk8ACvPFDp3ZmmJfNx9Ha4MvaVo6huVY1jCMlxJSdx6YSaR1LMpugBjrYMjpdy/Wf/aAAwDAQACAAMAAAAQbMDz/8QAHxEBAAEDBAMAAAAAAAAAAAAAAREAITFBUWGBocHR/9oACAEDAQE/EMIYha0OTpJMFMGctN/lM2ZI8R6O6Ky4Y5JOjFy1f//EAB4RAQABAwUBAAAAAAAAAAAAAAERACExQVGRodHh/9oACAECAQE/EFqHIvE+UpLj57R9Ox3Jl3PFCNsKagw3GsNm9f/EABwQAQEAAwEBAQEAAAAAAAAAAAERACExQVFxgf/aAAgBAQABPxBNO4XlBSghE+i7opxAbATWdVI40clvNIxohKLC7mSs9dOlte02bIeYtSVxI0SQO4vjXBYmmpC5NCCnmcBYeE2EZij1CPboejmlThbkm/Ixnlxa0WRpVQiS4ncKwaRoJE8NWSlYQ8oltDroNNFmT0i7ZYRFEzi/kEAAVl0gHjkCj3FXLWAKRCVNgiIclzgBWnVIl+UiuOPXb37IO9LS+w//2Q==","anon?":false,"admin?":false},{"sex":"female","login":"ludolfina98","id":"-576460752302404655","color":"#ff5917","banned?":false,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABsAAAEEAwAAAAAAAAAAAAAAAAgEBQYHAQID/8QAFwEAAwEAAAAAAAAAAAAAAAAABAUGA//aAAwDAQACEAMQAAABHhaukM7Ts3PEO3FkN+iddTedIIaN34Fh/8QAHRAAAwEBAAIDAAAAAAAAAAAAAgQFBgMAAQcSFP/aAAgBAQABBQLkCphPjftqOu8M83wp8XvFp6n2Q9LpP/IuOvBXiIsxxgVpLjsuc20/f01FFHVZx9mrhmGhsy22wUr6Q1LGhukeh//EACMRAAEDAwIHAAAAAAAAAAAAAAEAAgMEEVEFIxIiMkFC4fH/2gAIAQMBAT8BijifIAUTunh6crVZKhsjahnL2Fr+8rQKSWxe47bhny+L/8QAHhEAAQQBBQAAAAAAAAAAAAAAAQACAyEEBRIiMrH/2gAIAQIBAT8BJc0Ktlm1itiuN1rVpgeo5Dxf/8QAKhAAAgEDAwIEBwEAAAAAAAAAAQIDAAQREiFBBRMiMVGhFSMkQnGBkcH/2gAIAQEABj8CCCJzsSGC7V8Ph6fLO4UOQrge9G2aVQvBkGD+xRdLhWHOhqVpOqeOJCNJVRn23rvywOTLhs62XIG3H5pbgdGnFvJHG0DpGWUjQPu5qSO7iKuzZwRXaFm7yZaUSuTsfPyzUU8HamXSuDImAhq06NdzQyPcqV09vbHoRuM55p7mz6kIg2PltFqxt60TbzmP6d+5p5Hp/cVFIlzIMRg7PjNWlj1FnkuJHBhbAZV3xzU1jdxJ3YUTU0MWlT4Qf9r/xAAgEAACAwABBAMAAAAAAAAAAAABEQAhMUFRYXGRgcHR/9oACAEBAAE/ISXwkwXT3ODCHGz0+CUvBzxAuAhELtF5pUKPGSw68RpKhMgTja1RCSsKR5+W2Amba7gx1KEpTCfwQuTgcA9QcxBBRAAkVo+xxKKu1B3RHBIEOgFmVN+VFCNA4pUqAtL/AEfEPHC1gELa3tcXLl1SVq93UXOECZHKeofU/9oADAMBAAIAAwAAABCqSNj/xAAcEQEBAAMAAwEAAAAAAAAAAAABEQAhMUFRYfD/2gAIAQMBAT8QY6Czc9WH7hcSBtoBpr7zusRUvo0QaxYpFvjxmxsGhECzXtC2cQbM/8QAHhEBAAIBBAMAAAAAAAAAAAAAAREhADFBUWGBkaH/2gAIAQIBAT8QUMNHfOuIS7WtH1riI1LZjqNjjFCt20GYk/U8mf/EAB0QAQEAAwEAAwEAAAAAAAAAAAERACExQVFhcZH/2gAIAQEAAT8QnOdlDRM4AvuTHD/CwBlZSwYl65YPUe6darGKbTrWNl9BZL1UpdYcaxyA3SQF43nmBqpcGOSUaBQfsyNublVQVE6VqxXCfvGarohPP7hVdK/RGHPjB2S9tlmgey0l6ooNGsO5LZAajIAZa1kLfqCCggZtVu7hotgBO0YzRHTEe4kYcdUmCCt0B+TI/cG9pZqxR3HIsAY4Iu6JfwaDP//Z","anon?":false,"admin?":false},{"sex":"male","login":"Formek21","id":"-576460752302406031","color":"#ff0000","banned?":false,"avatar":"http://xe.cdn03.imgwykop.pl/c3397992/Formek21_eb8Qv9Xnwt,q30.jpg","anon?":false,"admin?":false},{"sex":"male","login":"+takie_chwile_jak_te","id":"-576460752302407663","color":"#e5a3ad","banned?":false,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABcAAQEBAQAAAAAAAAAAAAAAAAYHCAL/xAAWAQEBAQAAAAAAAAAAAAAAAAACBQT/2gAMAwEAAhADEAAAAceMzmpJdjMPF9IojWk1Tlo99zmjLP8A/8QAGxAAAgMBAQEAAAAAAAAAAAAABAUCAwYHEwH/2gAIAQEAAQUCH9vttSwsgY1YwClQPbOKmVfu7Yq5A6hhO3MZhwxRmCL4j00MYX0VUmPDuecyzubAXtrvHJClvX/JufKFZPQ95LHj/wD/xAAcEQABBAMBAAAAAAAAAAAAAAADAAECBBESEyH/2gAIAQMBAT8BrVu0XfKsV+JNUI8Rx8Vgkikwy//EABsRAAIDAQEBAAAAAAAAAAAAAAEDAAIRBCEx/9oACAECAQE/Aeh5VcDInpLF6RGKNj7FCoGn5P/EACkQAAIBAwMCBAcAAAAAAAAAAAECAwAEEQUSIRNRFDFBYSIjQlJxobH/2gAIAQEABj8CCfcRjNGdrTjOELcBvxQ8VZPGCMqSvnW6P9Uk80QYKwO0+tQnT7aNWixsJQfD2xTaVCc7cZlC+deM0OICSS22yfJD/V2I9hUc+3PTra3PbmodHswcyOAzD++9LcDS067wKkjuMlsevsTRtJOezVbaFaTrE9w+Oow4HrTaqrNM27CNKOagENuWMj4r/8QAHxABAAMBAQABBQAAAAAAAAAAAQARITFRQWFxgaHR/9oACAEBAAE/ISHbRWdjr7/bA09iBdYlD0fmdJbVdQRpsfrkcSIxk6ppUNM/klG1fryHGkwQUy1XW+99jcq6/sbsNrVYHLTS4tKraX+oEFjwAtiojUMj75B+D6x+azaALYdwYOkspSsXMNluHhKwpn//2gAMAwEAAgADAAAAEChc7P/EAB0RAAICAQUAAAAAAAAAAAAAAAERADEhQVFxgfD/2gAIAQMBAT8QOApXe8TgWw/KDBwBvma+zP/EABwRAAICAgMAAAAAAAAAAAAAAAABETFBUSFx4f/aAAgBAgEBPxBYpTb6GeI0495HzJGNylt7P//EAB8QAQEAAgMAAgMAAAAAAAAAAAERACExQVFhcZGhsf/aAAgBAQABPxAyCRiKyVZzhTNOwCpkFR4f5n6Cehqh9OJUXs6nrlzbChhGexsTDk0wMtuxs42nFCutk2nLl0bw62by0gEJ7B2BGaInY5tGPm8ZvPQID7dz8YowHQ8I4BgLFjT4VR4IINWYFlXArKbfHy433i7wxPquxah2yobya+nWegNgUBYTbjugogBu07DP/9k=","anon?":false,"admin?":false},{"sex":"male","login":"paczczczacz","id":"-576460752302679326","color":"#3f6fa0","banned?":false,"avatar":"http://xS.cdn03.imgwykop.pl/c3397992/paczczczacz_SuTzUdnBY9,q30.jpg","anon?":false,"admin?":false},{"sex":"male","login":"Wyrewolwerowanyrewolwer","id":"-576460752302416911","color":"#ff5917","banned?":false,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAwb/2gAMAwEAAhADEAAAAZ1adHzjk9QJKSwdqJr0jXpwSzuXgXhCv//EABwQAAICAwEBAAAAAAAAAAAAAAQFAwYBAgcAFP/aAAgBAQABBQJNzhkR4bkDKBeGqXMjnMnwFRH0ujJSuwWW2ulXM2uAGIaYLN9Yp2mebUfSsBhMY86szNZJ0NSytK3cybYkbTR+kL3m0//EAB8RAAEDAwUAAAAAAAAAAAAAAAIAAwQBESIFEyExMv/aAAgBAwEBPwF4241dloMq9INNnHybllBimN3XPVUeBXX/xAAiEQACAQMCBwAAAAAAAAAAAAABAwIABAUREyEjMTJBkdH/2gAIAQIBAT8Btt+9Ja2eix1+CmZfHw4KVr7FZS7iQEp7BUeYsRHiv//EACwQAAECBAYAAwkAAAAAAAAAAAECAwAEBRESEyExQWEUIoEGMjNCUVJxktH/2gAIAQEABj8CFk39IXUZhYShsXIw6winKmstJl81cxk4kgcDTXXT10gyj8s2FoNl+U2g1WtgjBoltHvOK4SO4mZeQZS0y6MqXl2dmx+eT3z1DUzWfaM+JKsT6WmwL/S55MJDcqXCBYl3WHJirTzrnkLchkat3+dKPuN7Jxbb72AhNWqQAmnBdDZHwh/YXmTI25EHG9zCavVp3xRZARJItZLQHUahX7RhSN+4Sox//8QAIBAAAgMBAAICAwAAAAAAAAAAAREAITFBUWFxgaHh8P/aAAgBAQABPyGqpHw8XiCBJegI6PxleNAWoWgmDUY+TQH0fj8gwK8BA+I9L9lAOEGyIMilTpYI8JRdZhVJwIoWtb9zTrCRtkta4WinhSvsUCpF4FqHhXef6pmuNQzBwhLgGrs1ESk6XSTpjOYPcCeNGnWGf//aAAwDAQACAAMAAAAQu/42/8QAHBEBAAICAwEAAAAAAAAAAAAAAQARITFBcYGh/9oACAEDAQE/EBFjma7c3RuE+NQ/KIwnNl3LI3c//8QAHREAAQUAAwEAAAAAAAAAAAAAAQARITFRYXGBsf/aAAgBAgEBPxDTQqduCzUV2y1wM2dFzGKHMAgQ/n3T6jIRKf/EACAQAQEAAwABBAMAAAAAAAAAAAERACExQVFxgZGhsfD/2gAIAQEAAT8QVrHhQ/WelKbNyGqqGLVPjpiTLUh5igmX4lRRJRKBOgEJMOKev028GkNgFRAmi4furpag3Mo5ERo/GDUgFLs7dljtkrlJFqXX4xN1WrDc4K24GcnWQkDps7Q71amlZOMa0a+9xo0V/VxvJ7aKYSjQoJ2mVAV81/GMlB2b+9YzKC7AsU/Rn//Z","anon?":false,"admin?":false},{"sex":"","login":"@Benek","id":0,"color":"#FFFFFF","banned?":false,"avatar":"http://mirkoczat.pl/images/benek_av_30.png","anon?":true,"admin?":false}],"topic":"http://i.imgur.com/NUTe7Pp.mp4 | http://i.imgur.com/i9guaAl.mp4 | http://i.imgur.com/ebU1B9l.mp4"}
    )
    ms.doGlobalInfo(
      {"tags":[{"name":"sdm","count":7}],"rooms":[{"name":"indywidualny","count_all":9,"count":8},{"name":"f1","count_all":1,"count":1},{"name":"cytrynowo","count_all":2,"count":1},{"name":"DrzeWo","count_all":2,"count":1}]}
    )
    ms.doGetMessage(
      {"user":"mirko_chat","uid":"-576460752302674990","sex":"","score":0,"color":"#3f6fa0","body":"test @mirko_chat","avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAUGBwED/8QAFgEBAQEAAAAAAAAAAAAAAAAABQMH/9oADAMBAAIQAxAAAAHHyazufaRPIKekbkw1yCsLLaKGEgf/AP/EABwQAAIDAQEBAQAAAAAAAAAAAAQFAgMGABYBFf/aAAgBAQABBQJq1syU/eaHg9brmE7AfupXt0QDh4EJnh7GKQ2hKhlOdL11+JprHh8wijCjrctZFbntBsyBi/dvu92+5q7ZurP/xAAmEQABAwMDAgcAAAAAAAAAAAABAgMEERIhAAVBEyIUMTJCUVLw/9oACAEDAQE/AXom+GatLMnosg0SAeLkt+lI+xFamuanTMOYZAibg4twKSa3Us8q9vuuSRkj5zwDu8qGqa634tQFVYS3juKVHNwJyAeMjGos7b9rfVKacU65QgXJoM8k3qJ/Z1//xAAnEQABBAECAwkAAAAAAAAAAAABAgMEESEAEgUiQRMUMTJCUVJhgf/aAAgBAgEBPwFqVwYREqej9q6RaiR12qX5lH4g1QrFDTsuIGDKgoS2UqxV7vGub07VA4B9sfXC40sRG191STQyV55QpIxtIGCfw51JhzuIspjONpbbsHCrOOgG1I1//8QAKRAAAQMDAwIFBQAAAAAAAAAAAgEDBAAREgUTMSFBFCIyUZMjM0JSof/aAAgBAQAGPwJrR9HjtCosiTzxN3IyWvus/AlbcFkXVTlAjItqV6bEGNNjyNt0hbxyS3dPepLsuaY7EQTVlsfMSY+/FaY9F0YCDULifiVzUbfyhY0FvbNvUDNy5Y9EJcV69uKmG7PSSayhzeFOirh2p97w+7uwBbxytyidajQUNBGISqyQeq9635kg3T/YyvTkucu2DspNtS/Ly0AaXGbH6QqZuNIpEtcsfAlcsfAlI5qEnPH0iiWRK//EAB4QAQEAAgIDAQEAAAAAAAAAAAERACExQRBRYXHR/9oACAEBAAE/IRR0OKXvrxClI1hj7DWct9im3AhE1hkbF7amOn5iQtQeS9zrIbqYOHeRIYV7zI5Y9g4HuZXpdSvgPrA1IUgVW3GrwShT1kqHtPRcfMINv8hgCeV10FRhH4wz/9oADAMBAAIAAwAAABBZxNT/xAAZEQEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQMBAT8QONRzhBMUEgpWqr7lNK2bYRQAAiB4DB1tAis5vQHg+uXoGtIvgAwCqlAd/8QAGREBAQEAAwAAAAAAAAAAAAAAAREhADFB/9oACAECAQE/EHsRYa030KCQJdB44GI5UFsFCqGkXh/yfGqDeTyt7Hh98hyrQRKprgDBXn//xAAdEAEBAAIDAQEBAAAAAAAAAAABEQAhMUFRYfDB/9oACAEBAAE/ELp+PAleB6OrCBtLn8HzK/CqPTgPrgNZ0ghvIEN+GtMBHK3UaXB9CvhvF16gQCqhreiALjpXPs6USU2nDFGbear1EkFkgACATAqgrik07IPU3eTHa6UXX7hYQIB3vA6GUxcBXQeGsl1X0bFrmhLxR8xK1TsCAtSAHfPUz9J/M8vyfMA3INVlnAWFeWG9Gf/Z","anon?":false}
    )
    ms.doInfoEnter(
      {"user":"mirko_chat","body":"wchodzi"}
    )
    ms.doUserInfo(
      {"sex":"","login":"mirko_chat","id":"-576460752302404271","color":"#3f6fa0","banned?":false,"avatar":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTUK/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAUGBwED/8QAFgEBAQEAAAAAAAAAAAAAAAAABQMH/9oADAMBAAIQAxAAAAHHyazufaRPIKekbkw1yCsLLaKGEgf/AP/EABwQAAIDAQEBAQAAAAAAAAAAAAQFAgMGABYBFf/aAAgBAQABBQJq1syU/eaHg9brmE7AfupXt0QDh4EJnh7GKQ2hKhlOdL11+JprHh8wijCjrctZFbntBsyBi/dvu92+5q7ZurP/xAAmEQABAwMDAgcAAAAAAAAAAAABAgMEERIhAAVBEyIUMTJCUVLw/9oACAEDAQE/AXom+GatLMnosg0SAeLkt+lI+xFamuanTMOYZAibg4twKSa3Us8q9vuuSRkj5zwDu8qGqa634tQFVYS3juKVHNwJyAeMjGos7b9rfVKacU65QgXJoM8k3qJ/Z1//xAAnEQABBAECAwkAAAAAAAAAAAABAgMEESEAEgUiQRMUMTJCUVJhgf/aAAgBAgEBPwFqVwYREqej9q6RaiR12qX5lH4g1QrFDTsuIGDKgoS2UqxV7vGub07VA4B9sfXC40sRG191STQyV55QpIxtIGCfw51JhzuIspjONpbbsHCrOOgG1I1//8QAKRAAAQMDAwIFBQAAAAAAAAAAAgEDBAAREgUTMSFBFCIyUZMjM0JSof/aAAgBAQAGPwJrR9HjtCosiTzxN3IyWvus/AlbcFkXVTlAjItqV6bEGNNjyNt0hbxyS3dPepLsuaY7EQTVlsfMSY+/FaY9F0YCDULifiVzUbfyhY0FvbNvUDNy5Y9EJcV69uKmG7PSSayhzeFOirh2p97w+7uwBbxytyidajQUNBGISqyQeq9635kg3T/YyvTkucu2DspNtS/Ly0AaXGbH6QqZuNIpEtcsfAlcsfAlI5qEnPH0iiWRK//EAB4QAQEAAgIDAQEAAAAAAAAAAAERACExQRBRYXHR/9oACAEBAAE/IRR0OKXvrxClI1hj7DWct9im3AhE1hkbF7amOn5iQtQeS9zrIbqYOHeRIYV7zI5Y9g4HuZXpdSvgPrA1IUgVW3GrwShT1kqHtPRcfMINv8hgCeV10FRhH4wz/9oADAMBAAIAAwAAABBZxNT/xAAZEQEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQMBAT8QONRzhBMUEgpWqr7lNK2bYRQAAiB4DB1tAis5vQHg+uXoGtIvgAwCqlAd/8QAGREBAQEAAwAAAAAAAAAAAAAAAREhADFB/9oACAECAQE/EHsRYa030KCQJdB44GI5UFsFCqGkXh/yfGqDeTyt7Hh98hyrQRKprgDBXn//xAAdEAEBAAIDAQEBAAAAAAAAAAABEQAhMUFRYfDB/9oACAEBAAE/ELp+PAleB6OrCBtLn8HzK/CqPTgPrgNZ0ghvIEN+GtMBHK3UaXB9CvhvF16gQCqhreiALjpXPs6USU2nDFGbear1EkFkgACATAqgrik07IPU3eTHa6UXX7hYQIB3vA6GUxcBXQeGsl1X0bFrmhLxR8xK1TsCAtSAHfPUz9J/M8vyfMA3INVlnAWFeWG9Gf/Z","anon?":false,"admin?":false}
    )
  }
}
