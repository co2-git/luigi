luigi
=====

luigi (~417B) is a minimalistic template engine for HTML5 written in JavaScript.

# Install

```bash
bower install luigi
```

# Usage

```html
<!doctype html>
<meta charset='utf-8'>

<!-- Target View -->

<div>Loading template...</div>

<!-- The template -->

<script type="text/html" id="my-template">
	<h1>Hello! I'm a template</h1>
</script>

<!-- Need jQuery -->

<script src=".. jquery.js"></script>

<!-- Get luigi -->

<script src=".. luigi.js"></script>

<script>

	// will load the content of the script tag with id "my-template"
	// and inject it into Target View
	
	luigi('my-template', function (error, view) {
		if ( error ) {
			return $('div').text(error.message);
		}

		view.find('h1').css('color', 'red');

		$('div').empty().append(view);
	});

</script>

<!-- You can also use URLs using the src attribute -->
<script type="text/html" id="my-template-url" src="/template.html"></script>

<script>

	// Same as above but will get template via URL
	
	luigi('my-template-url', function (error, view) {
		if ( error ) {
			return $('div').text(error.message);
		}

		$('div').empty().append(view);
	});

</script>

```
