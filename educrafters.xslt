<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <!-- Template for the root element -->
  <xsl:template match="/">
    <html>
      <head>
        <title>EduCrafters - Semester Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }

          h1 {
            color: #333;
          }

          h2 {
            color: #555;
          }

          .module {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
          }

          .module h3 {
            color: #777;
            margin-bottom: 5px;
          }

          .module p {
            color: #888;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <h1>EduCrafters - Semester Details</h1>
        <xsl:apply-templates select="EduCrafters/semesters/*"/>
      </body>
    </html>
  </xsl:template>
  
  <!-- Template for semester elements -->
  <xsl:template match="semester1 | semester2">
    <h2><xsl:value-of select="title"/></h2>
    <xsl:apply-templates select="subject"/>
  </xsl:template>
  
  <!-- Template for subject elements -->
  <xsl:template match="subject">
    <div class="subject">
      <h3><xsl:value-of select="title"/></h3>
      <xsl:apply-templates select="module"/>
    </div>
  </xsl:template>
  
  <!-- Template for module elements -->
  <xsl:template match="module">
    <div class="module">
      <h3><xsl:value-of select="title"/></h3>
      <p><xsl:value-of select="description"/></p>
    </div>
  </xsl:template>
  
</xsl:stylesheet>
