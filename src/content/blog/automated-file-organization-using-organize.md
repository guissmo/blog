---
title: "Automated File Organization Using Organize"
layout: "/src/layouts/PostLayout.astro"
category: Mini Projects
author: guissmo
date: 2023-05-28T22:30:44+02:00
draft: false
toc: true
categories:
  - Productivity
description: I spent a morning organizing my files using a tool called organize.
slug: automated-file-organization-using-organize
tags:
  - bash
  - yaml
  - regex
  - organize
---

My important documents folder has been accumulating documents since I moved to Europe -- so that's around 2014. And I had a "system" for organizing the files, but I never bothered renaming them because it was so tedious. The default filenames of some PDFs I've downloaded have not been very useful for searching, and so dumping them all in a folder was not really efficient.

Today, I finally got around to using [organize](https://github.com/tfeldmann/organize). The naming makes it unfortunately hard to search so I've linked it here!

The README was quite straightforward. All you had to do was enter

```bash
pip3 install -U organize-tool[textract]
```

in the terminal to install it. The `textract` was optional for people who wanted the ability to read inside PDFs.

## The Config File

To use **Organize** you had to set up a `config.yaml` file in `~/.config/organize`. I don't know how to pronounce YAML but in my mind I pronounce it "yah-mel". Don't trust me on that though since I used to say "ngeenks" for nginx. It is more efficient than the (apparently) more common three-syllable pronunciation.

For my use-case, I initially wanted to have my _avis d'imposition_ (tax assessment form) neatly in one folder. It's something that only needs to happen once a year and you can easily download it from [the French tax website](https://impots.gouv.fr) but it has started to get tedious to have to login every time I need to look at these forms.

Following the docs, I eventually ended up with the following rule:

```yaml
rules:
  - name: "IMPOT SUR LES REVENUS (AVIS D'IMPOT)"
    locations:
      - ~/Desktop
    subfolders: true
    filters:
      - extension: pdf
      - regex: 'Avis_d_impot_(?P<yearDeclared>\d+)_sur_les_revenus_(?P<yearTaxed>\d+).pdf'
    actions:
      - move:
          dest: "{env.DEST}/DOCS/GOUV/IMPOT/AVIS D IMPOT/Avis_d_impot_{regex.yearDeclared}_sur_les_revenus_{regex.yearTaxed}.pdf"
          on_conflict: "trash"
    tags:
      - yearly
      - impot
```

This basically tells `organize` to look for all the pdfs in whose filename satisfies the regex, rename it and move it to a different folder.

Let's do it step-by-step. All of these is in the docs but I don't want to read it again unless necessary so I'm writing it down here.

## Locations

Locations tell `organize` which locations to search from.

```yaml
locations:
  - ~/Desktop
```

I could have added more locations. But I don't have a lot since I've just reformatted my system due to my SSD dying recently, so I don't really have a lot of folders.

In some sense, the death of the SSD helped with [Marie Kondo](https://en.wikipedia.org/wiki/Marie_Kondo)-ing my files. Thankfully, I have backups. However, tax returns and titre de sejour applications don't spark joy so it's not strictly a Marie Kondo story.

I eventually had to add more rules to the config file, and so with some Google-fu I ended up declaring the locations in the top file and referencing it in the rules like so:

```yaml
docs: &docs
  - ~/Desktop

rules:
  - name: "IMPOT SUR LES REVENUS (AVIS D'IMPOT)"
    locations: *docs
```

That way, I don't have to do a search and replace if I ever need to add more folders in the future. Forward thinking let's go!

## Subfolders and Filters

My backup was in Dropbox and unlike my fresh new `~/Desktop` folder, it contained subfolders.

This is why my rule had `subfolders: true` on it.

```yaml
subfolders: true
filters:
  - extension: pdf
  - regex: 'Avis_d_impot_(?P<yearDeclared>\d+)_sur_les_revenus_(?P<yearTaxed>\d+).pdf'
```

As for the filters, I could have used `name` instead of this fancy `regex` but I didn't want to bother reading the documentation for `name`. You could though. It was quite easy. But since I needed to extract some parts of the filename, I thought using `regex` would be more practical.

Showing off that I know `regex` is quite handy so that job recruiters in the distant future know that I know that regex exists and use it. Because why not?

## Filtering by File Content

There is also a `filecontent` filter which came in handy when I wanted to rename the water bills. The original filename (or at least the filename in my backup) was something atrocious like `Eau Bill.pdf` and so that needed to go.

```yaml
filters:
  - extension: pdf
  - filecontent: "Services publics Eau"
  - filecontent: 'Facture de (?P<fromMonth>\w+) (?P<fromYear>\w+) à (?P<toMonth>\w+) (?P<toYear>\d+)'
```

This code tells `organize` to only consider PDFs which had "Services publics Eau" and "Facture de ..." in the **content**. It searches the content of the PDFs! If that didn't make you go EAU-M-G, I don't know what would. Don't rely on it too much though, because of course searching PDF content can be a bit sl-eau.

## Using the Captured Regex Groups in the Actions

You might have been wondering why I put `(?P<yearDeclared)\d+)` instead of just writing `\d+`. It's because I needed to reference that captured part in the actions portion of the rule.

```yaml
actions:
  - move:
      dest: "{env.DEST}/DOCS/GOUV/IMPOT/AVIS D IMPOT/Avis_d_impot_{regex.yearDeclared}_sur_les_revenus_{regex.yearTaxed}.pdf"
```

The action I use is mostly straightforward. It tells `organize` to move it to this new destination with an all new filename. In the end, the filename is exactly the same but we have to impress the recruiters, right?

I could have done the same thing by simply writing

```yaml
actions:
  - move:
      dest: "{env.DEST}/DOCS/GOUV/IMPOT/AVIS D IMPOT/"
      on_conflict: "trash"
```

But that wouldn't have worked for my other more complicated use cases.

Don't forget the trailing slash though! Otherwise it would think you want to rename it into a file named "AVIS D IMPOT", without an extension.

## Two Quick Detours

### Environment Variables

I didn't find a way to declare a destination variable so I opted to just use an environment variable `DEST` which I access using `env.DEST` from the previous rule.

```bash
DEST=~/experiment/organized organize run
```

### On Conflict

There were several options for when the destination already has a file with the same name sitting on it.

The default was to `skip`, meaning that the file would have stayed in its original place. But we wanted to clean it up, so we don't want that!

There was also `overwrite`, but that seemed too destructive so I opted for `trash` instead.

I never actually checked if the file went to the trash. So it was basically just `overwrite` with me feeling good that I could in theory recover the file if I wanted it back.

There were also other options like `replace_string` or something like that where the user has to how to rename the incoming file. But that sounded clutter-y and tedious. Kinda like how this section is going. So let's stop there.

## Selectively Choosing Rules

### Tags

You can add tags in your rules like so:

```yaml
tags:
  - test
```

And run `organize sim --tags=test` to make a dry run (or `organize run` for a wet (?) run).

This command will run only the rules who has `test` has a tag, as opposed to all of the rules on `config.yaml`.

### Other YAML files

You can also split your rules across several `yaml` files.

I eventually tried out adding a `temp.yaml` file for experimenting. I had to write the full path though:

```yaml
organize run ~/.config/organize/temp.yaml
```

Let me know if there is an easier way to do that!

## Conclusion

That's it! While organizing the files, I eventually ended up in a little side quest -- automatically transcribing scanned PDFs using `ocrmypdf`.

I'm not sure if there's a lot to say about that but more on that in a next but (probably short) blog post.
