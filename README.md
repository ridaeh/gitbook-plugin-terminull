# Terminull

## How to use it?
To use Terminull plugin in your Gitbook project, add the terminull plugin to the book.json file of your project, then install plugins using gitbook install.

{
    "plugins": ["terminull"]
}

## Usage

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