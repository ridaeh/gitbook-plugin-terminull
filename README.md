
<div align="center">
 <h1> Terminull </h1>
 <p>Terminull is a <a href="https://www.npmjs.com/package/gitbook">gitbook</a> plugin allows you to create a modern terminal for your gitbook pages it helps documente your commands and gives you a fast way to copy the command .</p>
 </div>
<a href="https://www.npmjs.com/package/gitbook-plugin-terminull"><img  src="https://img.shields.io/npm/v/gitbook-plugin-terminull/latest?color=green" alt="npm version"/></a>

 ## Themes:
 ### Dark theme

 <div align="center">
  <img src="https://raw.githubusercontent.com/ridaeh/gitbook-plugin-terminull/master/dark_theme_preview.png"/>
</div>

### Light theme
<div align="center">
  <img src="https://raw.githubusercontent.com/ridaeh/gitbook-plugin-terminull/master/light_theme_preview.png"/>
</div>

## How to use it?
To use Terminull plugin in your Gitbook project, add the terminull plugin to the `book.json` file of your project, then install plugins using `gitbook install`.

```json
{
  "plugins": ["terminull"],
  "pluginsConfig": {
    "terminull": {
      "theme": "dark", // use "light" for light theme
      "copy_button": "enabled" // "disabled" to hide the copy button
    }
  }
}
```

## Create you terminal

To create a terminal you can use one of two options:
 - Code markdown with `term` as language :
<pre ><code>```<strong style="color:green">term</strong>
terminull$ echo 'hello terminull' # This will print hello terminull
hello terminull
```
</code></pre>

e.g :
<pre lang="no-highlight"><code>```<strong style="color:green">term</strong>
echo 'hello terminull' 
```
</code></pre>

 - Gitbook term tag

Each terminal should have a directory where command is excuted, command and output of the command.

```
{% term %}
{% directory %}
~/gitbook-plugin-terminull
{% command %}
echo "Hello terminull"
{% comment %}
This will print 'Hello terminull' in the screen
{% output %}
Hello terminull
{% endterm %}
```

## You like my work :exclamation:
In case you were wondering how you can thanks me for my work, coffee :coffee: is the way to my heart.   

<a href="https://www.buymeacoffee.com/ridaeh" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" ></a>



## Contributing
Bug reports and pull requests are welcome.

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :smile: