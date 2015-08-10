<pre>
$$\   $$\                                     $$\
$$ |  $$ |                                    $$ |
$$ |  $$ | $$$$$$\  $$$$$$\$$$$\   $$$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\
$$$$$$$$ | \____$$\ $$  _$$  _$$\ $$  _____|\_$$  _|  $$  __$$\ $$  __$$\
$$  __$$ | $$$$$$$ |$$ / $$ / $$ |\$$$$$$\    $$ |    $$$$$$$$ |$$ |  \__|
$$ |  $$ |$$  __$$ |$$ | $$ | $$ | \____$$\   $$ |$$\ $$   ____|$$ |
$$ |  $$ |\$$$$$$$ |$$ | $$ | $$ |$$$$$$$  |  \$$$$  |\$$$$$$$\ $$ |
\__|  \__| \_______|\__| \__| \__|\_______/    \____/  \_______|\__|
                                                                                   
                                                                                   
                                                                                   
 $$$$$$\                                     $$\
$$  __$$\                                    $$ |
$$ /  \__|$$\  $$\  $$\  $$$$$$\   $$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\   $$$$$$$\
\$$$$$$\  $$ | $$ | $$ |$$  __$$\  \____$$\\_$$  _|  $$  __$$\ $$  __$$\ $$  _____|
 \____$$\ $$ | $$ | $$ |$$$$$$$$ | $$$$$$$ | $$ |    $$$$$$$$ |$$ |  \__|\$$$$$$\  
$$\   $$ |$$ | $$ | $$ |$$   ____|$$  __$$ | $$ |$$\ $$   ____|$$ |       \____$$\
\$$$$$$  |\$$$$$\$$$$  |\$$$$$$$\ \$$$$$$$ | \$$$$  |\$$$$$$$\ $$ |      $$$$$$$  |
 \______/  \_____\____/  \_______| \_______|  \____/  \_______|\__|      \_______/

                              _           _
                            (`-`;-"```"-;`-`)
                             \.'         './
                             /             \
                             ;   0     0   ;
                            /| =         = |\
                           ; \   '._Y_.'   / ;
                          ;   `-._ \|/ _.-'   ;
                         ;        `"""`        ;
                         ;    `""-.   .-""`    ;
                         /;  '--._ \ / _.--   ;\
                        :  `.   `/|| ||\`   .'  :
                         '.  '-._       _.-'   .'
                         (((-'`  `"""""`   `'-)))
</pre>

### How to install

```bash
# Clone the repo
> git clone https://github.com/kevinquinnyo/hamster-sweaters.git
> cd hamster-sweaters

# Install node requirements
> npm install

# Build the site
> grunt jekyll
```

### How to build

Use [Jekyll](http://jekyllrb.com/) to build the static portion of the site. You can use Jekyll directly to build the site or you can use grunt.

```bash
# With Grunt
> grunt jekyll

# With Jekyll
> jekyll build
```

### Available Tasks

- `clean-house` Runs all of the clean tasks to restore the repo back to its initial state.
- `grunt jekyll` Builds the jekyll site.
- `grunt` Same as `grunt jekyll` *(default)*