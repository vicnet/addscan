AddScan thunderbird module
==========================

This thundermail module that allow to attach a scan into a mail message.

Development
===========

Local installation
------------------

See [mozilla site](https://developer.mozilla.org/en-US/Add-ons/Thunderbird/Building_a_Thunderbird_extension_7:_Installation?redirectlocale=en-US&redirectslug=Extensions%2FThunderbird%2FBuilding_a_Thunderbird_extension_7%3A_Installation)

Scanimage tester
----------------

If you have no scanner in your dev environment, you could add a fake one.
Search dll.conf in [twain-sane page](http://www.ellert.se/twain-sane/faq.html)

Tests
-----

Launch Thunderbird in compose mode (new mail) with javascript console:
```shell
thunderbird -compose -jsconsole

```
