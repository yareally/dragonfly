// Autogenerated by hob
window.cls || (window.cls = {});
cls.ResourceManager || (cls.ResourceManager = {});
cls.ResourceManager["1.0"] || (cls.ResourceManager["1.0"] = {});

cls.ResourceManager["1.0"].RequestFinished = function(arr, parent)
{
  this.parent = parent || null;
  this.requestID = arr[0];
  this.resourceID = arr[1];
  this.time = arr[2];
  this.data = arr[3] ? new cls.ResourceManager["1.0"].RequestData(arr[3], this) : null;
  this.toString = function() { return "[message RequestFinished]"; }
};

cls.ResourceManager["1.0"].RequestData = function(arr, parent)
{
  this.parent = parent || null;
  this.requestID = arr[0];
  this.resourceID = arr[1];
  this.mimeType = arr[2];
  /** 
    * The character encoding of the payload. Not applicable when the
    * payload is of a non-text type.
    */
  this.characterEncoding = arr[3];
  this.contentLength = arr[4];
  this.content = arr[5] ? new cls.ResourceManager["1.0"].Content(arr[5], this) : null;
  /** 
    * If the payload is multipart, this list contains the
    * individual parts.
    */
  var self = this;
  this.partList = (arr[6] || []).map(function(item)
  {
    return new cls.ResourceManager["1.0"].Part(item, self);
  });
  this.toString = function() { return "[message RequestData]"; }
};

cls.ResourceManager["1.0"].Content = function(arr, parent)
{
  this.parent = parent || null;
  /** 
    * If BYTES or DATA_URI was chosen as the transport mode, this field
    * contains the size of the data. (If, in addition, decoding was enabled,
    * the field contains the size of the decoded data).
    * 
    * If STRING was chosen as the transport mode, this field contains the
    * string length (regardless of encoding), i.e. the number of characters,
    * not including zero terminator.
    */
  this.length = arr[0];
  /** 
    * The (original) character encoding of the data (if applicable).
    */
  this.characterEncoding = arr[1];
  /** 
    * This field contains the data if BYTES was chosen as the transport
    * mode. If other modes were chosen, this field is not set.
    * 
    * @see ContentMode::Transport
    */
  this.byteData = arr[2];
  /** 
    * This field contains the data if either STRING or DATA_URI were chosen
    * as transport mode. If some other mode was chosen, this field is not set.
    * 
    * @ee ContentMode::Transport
    */
  this.stringData = arr[3];
  this.toString = function() { return "[message Content]"; }
};

cls.ResourceManager["1.0"].Part = function(arr, parent)
{
  this.parent = parent || null;
  /** 
    * In multi-part, each part may have its own headers.
    */
  var self = this;
  this.headerList = (arr[0] || []).map(function(item)
  {
    return new cls.ResourceManager["1.0"].Header(item, self);
  });
  /** 
    * The length of this part.
    */
  this.contentLength = arr[1];
  this.content = arr[2] ? new cls.ResourceManager["1.0"].Content(arr[2], this) : null;
  this.toString = function() { return "[message Part]"; }
};

cls.ResourceManager["1.0"].Header = function(arr, parent)
{
  this.parent = parent || null;
  /** 
    * The name of the HTTP header, for instance "Accept-Charset".
    */
  this.name = arr[0];
  /** 
    * The value of the HTTP header, for instance "utf-8" when using
    * Accept-Charset, or "text/html; charset=utf8" for Content-Type.
    */
  this.value = arr[1];
  this.toString = function() { return "[message Header]"; }
};
