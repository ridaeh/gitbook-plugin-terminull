
<div align="center">
 <h1> Terminull </h1>
 <p>Terminull is a gitbook plugin allows you to create a modern terminal for your gitbook pages in order to documente your commands and it gives you a fast way to copy the command .</p>
  <br>
  <br>
	<a href="https://www.npmjs.com/package/gitbook-plugin-terminull"><img src="https://badge.fury.io/js/1.0.3.svg" alt="npm version" height="18"></a>
  <br>
  <br>
  <img src="./resources/terminull.png">
</div>


## How to use it?
To use Terminull plugin in your Gitbook project, add the terminull plugin to the `book.json` file of your project, then install plugins using `gitbook install`.

```json
{
    "plugins": ["terminull"]
}
```

## Create you terminal

First, you need to create a terminal. Each terminal should have a directory where command is excuted, command and output of the command.

```
{% term %}
{% directory %}
~/gitbook-plugin-terminull
{% command %}
echo "Hello terminull"
{% output %}
Hello terminull
{% endterm %}
```
## You like my work :exclamation:
In case you were wondering how you can thanks me for my work, coffee :coffee: is the way to my heart.   

<a href="https://www.buymeacoffee.com/ridaeh" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" ></a>



## Contributing
Bug reports and pull requests are welcome.