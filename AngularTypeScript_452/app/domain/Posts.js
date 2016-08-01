var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var domain;
    (function (domain) {
        var Post = (function (_super) {
            __extends(Post, _super);
            function Post(Title, Author, AuthorGravatar, URI, DatePublished, ImageURI, Contents, Id) {
                _super.call(this);
                this.Title = Title;
                this.Author = Author;
                this.AuthorGravatar = AuthorGravatar;
                this.URI = URI;
                this.DatePublished = DatePublished;
                this.ImageURI = ImageURI;
                this.Contents = Contents;
                this.Id = Id;
                this.Id = Id;
                this.Title = Title;
                this.Author = Author;
                this.AuthorGravatar = AuthorGravatar;
                this.URI = URI;
                this.DatePublished = DatePublished;
                this.ImageURI = ImageURI;
                this.Contents = Contents;
            }
            return Post;
        }(app.domain.EntityBase));
        domain.Post = Post;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=Posts.js.map