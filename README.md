# OpenLink Structured Data Editor

## Intro
The OpenLink Structured Data Editor (OSDE) is a tool for creating and editing structured data using RDF Language sentences/statements.  It is available here as a plugin for
[Google Chrome](http://www.google.com/chrome/browser/),
[Mozilla Firefox](http://www.mozilla.org/firefox/) and
[Opera](http://www.opera.com/) web browsers (support for additional browsers like
[Apple Safari](http://www.apple.com/safari/) and
[Microsoft Edge](https://www.microsoft.com/microsoft-edge) is under construction), and
[elsewhere in a webserver-hosted form](http://osde.openlinksw.com/).

In any of these forms, OSDE creates and enables creation and editing of data using abstract subject → predicate → object or entity → attribute → value notation. Once constructed, data can be saved to local or remote storage as RDF-Turtle documents. Full document access requires that HTTP-accessible host servers support at least one of the following open standards:

- **[Linked Data Platform (LDP)](http://dbpedia.org/resource/Linked_Data_Platform)**
- **[WebDAV](http://dbpedia.org/resource/WebDAV)**
- **[SPARQL 1.1 Update](https://www.w3.org/TR/sparql11-update/)**
- **[SPARQL Graph Protocol](https://www.w3.org/TR/sparql11-http-rdf-update/)**

Data stored as RDF-Turtle documents can be further transformed to other formats ([JSON-LD](http://dbpedia.org/resource/JSON-LD), [CSV](http://dbpedia.org/resource/Comma-separated_values), [OData](http://dbpedia.org/resource/Open_Data_Protocol), [Microdata](http://dbpedia.org/page/Microdata_%28HTML%29), [RDF/XML](http://dbpedia.org/resource/RDF/XML), [RDF/JSON](https://www.w3.org/TR/rdf-json/), etc.) using a variety of transformation tools and services.


## License
Copyright 2014-2019 [OpenLink Software](mailto:osde@openlinksw.com)

This software is licensed under the GNU General Public License (see
[COPYING](http://github.com/OpenLinkSoftware/osde/blob/develop/COPYING)).

**Note**: the only valid version of the GPL license as far as this project is concerned is the
original GNU General Public License Version 2, dated June 1991.


## Why is OSDE Important?

The [World Wide Web (or simply, the Web)](http://dbpedia.org/resource/World_Wide_Web) was originally conceived as a _Read-**and-Write**_ medium, but even now, with user-created content filling many web surfers' screens, most usage remains _Read-Only._

OSDE bolsters the growing **Write** dimension by letting users create _structured data_ using the familiar File Create → Save → Share pattern, without forcing a document storage location, i.e., documents created with OSDE may be stored to the desktop or to virtually anywhere in the cloud.

### Features of OSDE

- There is no assumption that Structured Data will be created in English; i.e., structured data can be annotated with language tags identifying the natural language of each annotation. (For example, if annotating in English, you would put “`en`” in the `lang` field, when prompted.)
- Shared Ontologies/Vocabularies may be imported to ease data entry.
- Sentence predicate types are intelligently suggested, driven by Ontology/Vocabulary lookups.
- Automatic profile lookup — if authenticated via WebID+TLS protocol — provides default document storage locations and (eventually) other preferences.
- A variety of _**EDIT**_ views are scoped to Statements, Entities, Attribute Names, and Attribute Values. Users can switch between these views to suit their own editing modality preferences.
- Documents may be saved (or downloaded) to local or cloud storage.
- Cloud Storage supports multiple HTTP-based storage protocols
([WebDAV](http://dbpedia.org/resource/WebDAV),
[LDP](http://dbpedia.org/resource/Linked_Data_Platform),
[SPARQL Graph Protocol](https://www.w3.org/TR/sparql11-http-rdf-update/),
[SPARQL 1.1 Update](https://www.w3.org/TR/sparql11-update/)).
- Hosted deployment may be through [Apache](http://dbpedia.org/resource/Apache_HTTP_Server),
[IIS](http://dbpedia.org/resource/Internet_Information_Services),
[Node.js](https://en.wikipedia.org/wiki/Node.js),
[Tomcat](http://dbpedia.org/resource/Apache_Tomcat),
[OpenLink Virtuoso](http://dbpedia.org/resource/Virtuoso_Universal_Server), or any other HTTP Server.
- OSDE is 100% Javascript.
- OSDE is made available as Open Source.

### New features and fixes

#### v1.1.3, 2017-11-21
- Fix — Copy and Paste of RDF-Turtle or JSON-LD via “Direct Input” feature
- Add — Load Turtle or JSON-LD documents from Filesystem
- Add — Default WebID may be set via interaction with YouID extension, if also present — this sets the identity used for “Save” and “Save As” operations

## Deployment
To deploy this extension on your local machine you can either *clone the git source tree* or
*download a source archive* and then *install the extension* into your Chrome or Opera browser on
the same system.

### Clone the git source tree
Clone the sources from github using the following commands:
```shell
$ cd src
$ git clone https://github.com/OpenLinkSoftware/osde
```
which will automatically download the latest develop branch.

### Download a source archive
Download and extract a .tar.gz or .zip from either one of the
[stable releases](https://github.com/OpenLinkSoftware/osde/releases/latest)
or directly from one of the following links:

- [latest stable .tar.gz](https://github.com/OpenLinkSoftware/osde/archive/master.tar.gz)
- [latest stable .zip](https://github.com/OpenLinkSoftware/osde/archive/master.zip)
- [latest development .tar.gz](https://github.com/OpenLinkSoftware/osde/archive/develop.tar.gz)
- [latest development .zip](https://github.com/OpenLinkSoftware/osde/archive/develop.zip)


### Install the extension in Chrome
You can get the latest public release from [the Chrome store](https://chrome.google.com/webstore/detail/openlink-structured-data/pglecohilpohlmjbdbbcmfpapfpcmbjl).

To install the latest development build manually, take the following steps:

1. Open the Chrome browser
2. Select from menu: **Chrome** → **Preferences** → **Extensions**
3. Check the [X] **Developer mode** box
4. Choose the option **Load unpacked extension...**
5. Navigate to the folder containing the extracted source code
6. Press the **Select** button


### Install the extension in Opera
You can get the latest public release from [the Chrome store](https://chrome.google.com/webstore/detail/openlink-structured-data/pglecohilpohlmjbdbbcmfpapfpcmbjl).

To install the latest development build manually, take the following steps:

1. Open the Opera browser
2. In address bar type in **opera:extensions**
3. Press the **Developer Mode** button
4. Choose the option **Load unpacked extension...**
5. Navigate to the folder containing the extracted source
6. Press the **Select** button

### Install the extension in Firefox
Download the [Firefox OSDE .zip](https://github.com/OpenLinkSoftware/osde/releases/)
file and extract the .xpi file.

To install this extension manually in Firefox v28+, use the following steps:
1. Open the **Firefox** browser
2. In address bar type: **about:config**
3. Press the **I'll be careful, i promise** button
4. Search for **xpinstall.signatures.required**
5. Double click that line so the value is set to **false**
6. In address bar type: **about:addons**
7. Click on the Gear icon and select **Install Add-On from file...** from the menu
8. Navigate to the directory where you extracted the `OSDS_FF.xpi` file, select this file and press the
  **Open** button
9. Press the **install** button


## How do I use OSDE?

### Overview

Metaphorically, as in the real-word:

1. You write sentences to a document (e.g., a page in a book).
2. Sentences in a page are grouped by paragraphs. OSDE groups statements by attribute (predicate) to emulate this concept.
3. A document may be part of a collection — like one of many pieces of paper in a folder, pages in a chapter, or chapters in a book. When writing to a SPARQL server, OSDE treats each document as a named graph.

Somewhat more elaborately —

- You write "entity → attribute → value" or "subject → predicate → object" sentences/statements to a document, which is identified by an HTTP-scheme URL.
- _Entity_ and _Attribute_ (or, if you prefer RDF parlance, _Subject_ and _Predicate_) are each identified by an HTTP URI, which may be absolute or relative to the document. _Value_ (a/k/a _Object_) may be either a literal string or a URI.
- Sentence/Statement collections are grouped by Attribute (Predicate), and this is the basis for optimistic concurrency hashes constructed for handling multi-user editing activity against the same document.

You can get started by creating a brand new document or applying edits to an existing document.

### Using an existing OSDE Instance, Local or Hosted

#### Basic Usage

1. Set a location for your document. This could be a folder to contain a new document, or the target document itself.

2. Open your document from its location.

3. Add or edit RDF Language statements using any of the view options — defaults are _Statements_, _Entities_, _Attributes_, _Values_. Configuration options let you change these to _Statements_, _Subjects_, _Predicates_, _Objects_.

4. Save your document to your desktop (via download link) or to a remote cloud location that supports one of:

   - [Linked Data Platform (LDP)](http://dbpedia.org/resource/Linked_Data_Platform)
   - [WebDAV](http://dbpedia.org/resource/WebDAV)
   - [SPARQL 1.1 Update](https://www.w3.org/TR/sparql11-update/)
   - [SPARQL Graph Protocol](https://www.w3.org/TR/sparql11-http-rdf-update/)

5. Done.

#### Demonstration of Turtle Input

1. Start OSDE with a New Document.
   ![PNG of OSDE demo starting point](http://osde.openlinksw.com/images/osde-usage-demo-screen-1-start-screen.png)

2. From the Action menu, select Input Turtle Directly. Paste or type your Turtle, and click Import.
   ![PNG of OSDE demo Turtle input](http://osde.openlinksw.com/images/osde-usage-demo-screen-2-turtle-source.png)

3. Inspect and/or edit the imported data in Statements view.
   ![PNG of OSDE demo Statements view](http://osde.openlinksw.com/images/osde-usage-demo-screen-3-statements.png)

4. Inspect and/or edit the imported data in Entities (Subjects) view.
   ![PNG of OSDE demo Entities (Subjects) view](http://osde.openlinksw.com/images/osde-usage-demo-screen-4-entities.png)

5. Inspect and/or edit the imported data in Attributes (Predicates) view.
   ![PNG of OSDE demo Attributes (Predicates) view](http://osde.openlinksw.com/images/osde-usage-demo-screen-5-attributes.png)

6. Inspect and/or edit the imported data in Values (Objects) view.
   ![PNG of OSDE demo Values (Objects) view](http://osde.openlinksw.com/images/osde-usage-demo-screen-6-values.png)


#### Usage Screencasts

Here are a couple of silent screencasts showing OSDE in action, through loose coupling to the OpenLink Structured Data Sniffer (OSDS), which exposes OSDE as its Annotation feature.

- OpenLink RDF Editor Demo -- Open Data Flow

  <a href="http://www.youtube.com/watch?feature=player_embedded&v=umrrhFk4W7g"
  target="_blank"><img src="http://img.youtube.com/vi/umrrhFk4W7g/0.jpg"
  alt="Open Data Flow Demo Video" width="240" height="180" border="10" /></a>


- OSDS & OSDE Integration Demo — Beyond Bookmarking Annotation Feature

  <a href="http://www.youtube.com/watch?feature=player_embedded&v=4v0_qu32od8"
  target="_blank"><img src="http://img.youtube.com/vi/4v0_qu32od8/0.jpg"
  alt="Beyond Bookmarking Annotation Feature Demo Video" width="240" height="180" border="10" /></a>


