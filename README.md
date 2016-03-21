*This project has been discontinued before reaching a usable state. I have too much work now and no time to make this CV website, which is kind of a sign that I don't need the CV in the first place ;)*

cv.shawninder
=============
This website aims to offer easy access to my CV.

# Usage
GET `/` returns a configuration page with live preview allowing control over every detail of the view one wants of the information available in the CV database. This will be how I, myself, would prepare a printed version for a specific company, for example, selectively including certain skills and past experiences, and showing or hiding certain types of information.

### Sharing
As part of the live preview, a list of urls is accessible which point to the currently displayed version of the CV, rendered as one of
* html
* printable (html)
* pdf
* rtf
* Others as need arises

It is also possible to save the current configuration under a shorter URL (e.g. /FogCreek), but being me is then required through authentication.

### URLS
GET `/custom.:format?:queryString` returns a version of the CV corresponding to the specified `:format` and the options represented in the `:queryString`.
* `:format` can be one of those listed above
* `:queryString` is the serialization of an object with any of the following options set to `true` or `false`, defaults being:
 * skills `true`
 * experiences `true`
 * referrals `false`
 * excerpts `true`
 * languages `true`
 * images `true`
 * links `true`
 * annotations `false` (only available if `:format` is `html`)
