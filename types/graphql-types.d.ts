export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  wordpressAcfOptions?: Maybe<Wordpress__Acf_Options>;
  allWordpressAcfOptions: Wordpress__Acf_OptionsConnection;
  wordpressWpUsers?: Maybe<Wordpress__Wp_Users>;
  allWordpressWpUsers: Wordpress__Wp_UsersConnection;
  wordpressCategory?: Maybe<Wordpress__Category>;
  allWordpressCategory: Wordpress__CategoryConnection;
  wordpressWpTaxonomies?: Maybe<Wordpress__Wp_Taxonomies>;
  allWordpressWpTaxonomies: Wordpress__Wp_TaxonomiesConnection;
  wordpressWpMedia?: Maybe<Wordpress__Wp_Media>;
  allWordpressWpMedia: Wordpress__Wp_MediaConnection;
  wordpressPage?: Maybe<Wordpress__Page>;
  allWordpressPage: Wordpress__PageConnection;
  wordpressPost?: Maybe<Wordpress__Post>;
  allWordpressPost: Wordpress__PostConnection;
  wordpressSiteMetadata?: Maybe<Wordpress__Site_Metadata>;
  allWordpressSiteMetadata: Wordpress__Site_MetadataConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfOptionsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressAcfOptionsArgs = {
  filter?: Maybe<Wordpress__Acf_OptionsFilterInput>;
  sort?: Maybe<Wordpress__Acf_OptionsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpUsersArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_UrlsFilterInput>;
  authored_wordpress__POST?: Maybe<Wordpress__PostFilterListInput>;
  authored_wordpress__PAGE?: Maybe<Wordpress__PageFilterListInput>;
  authored_wordpress__wp_media?: Maybe<Wordpress__Wp_MediaFilterListInput>;
  _links?: Maybe<Wordpress__Wp_Users_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressWpUsersArgs = {
  filter?: Maybe<Wordpress__Wp_UsersFilterInput>;
  sort?: Maybe<Wordpress__Wp_UsersSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  _links?: Maybe<Wordpress__Category_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressCategoryArgs = {
  filter?: Maybe<Wordpress__CategoryFilterInput>;
  sort?: Maybe<Wordpress__CategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpTaxonomiesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_LinksFilterInput>;
};


export type QueryAllWordpressWpTaxonomiesArgs = {
  filter?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  sort?: Maybe<Wordpress__Wp_TaxonomiesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  alt_text?: Maybe<StringQueryOperatorInput>;
  media_type?: Maybe<StringQueryOperatorInput>;
  mime_type?: Maybe<StringQueryOperatorInput>;
  media_details?: Maybe<Wordpress__Wp_MediaMedia_DetailsFilterInput>;
  source_url?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  guid?: Maybe<Wordpress__Wp_MediaFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  _links?: Maybe<Wordpress__Wp_Media_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressWpMediaArgs = {
  filter?: Maybe<Wordpress__Wp_MediaFilterInput>;
  sort?: Maybe<Wordpress__Wp_MediaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  parent_element?: Maybe<Wordpress__PageFilterInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressPageArgs = {
  filter?: Maybe<Wordpress__PageFilterInput>;
  sort?: Maybe<Wordpress__PageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  categories?: Maybe<Wordpress__CategoryFilterListInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressPostArgs = {
  filter?: Maybe<Wordpress__PostFilterInput>;
  sort?: Maybe<Wordpress__PostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressSiteMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressSiteMetadataArgs = {
  filter?: Maybe<Wordpress__Site_MetadataFilterInput>;
  sort?: Maybe<Wordpress__Site_MetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___postURLPrefix'
  | 'siteMetadata___pageURLPrefix'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  pageNumber?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___pageNumber'
  | 'context___humanPageNumber'
  | 'context___skip'
  | 'context___limit'
  | 'context___numberOfPages'
  | 'context___previousPagePath'
  | 'context___nextPagePath'
  | 'context___slug'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___baseUrl'
  | 'pluginCreator___pluginOptions___protocol'
  | 'pluginCreator___pluginOptions___restApiRoutePrefix'
  | 'pluginCreator___pluginOptions___hostingWPCOM'
  | 'pluginCreator___pluginOptions___useACF'
  | 'pluginCreator___pluginOptions___verboseOutput'
  | 'pluginCreator___pluginOptions___perPage'
  | 'pluginCreator___pluginOptions___searchAndReplaceContentUrls___sourceUrl'
  | 'pluginCreator___pluginOptions___searchAndReplaceContentUrls___replacementUrl'
  | 'pluginCreator___pluginOptions___includedRoutes'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___fileName'
  | 'pluginOptions___baseUrl'
  | 'pluginOptions___protocol'
  | 'pluginOptions___restApiRoutePrefix'
  | 'pluginOptions___hostingWPCOM'
  | 'pluginOptions___useACF'
  | 'pluginOptions___verboseOutput'
  | 'pluginOptions___perPage'
  | 'pluginOptions___searchAndReplaceContentUrls___sourceUrl'
  | 'pluginOptions___searchAndReplaceContentUrls___replacementUrl'
  | 'pluginOptions___includedRoutes'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  restApiRoutePrefix?: Maybe<Scalars['String']>;
  hostingWPCOM?: Maybe<Scalars['Boolean']>;
  useACF?: Maybe<Scalars['Boolean']>;
  verboseOutput?: Maybe<Scalars['Boolean']>;
  perPage?: Maybe<Scalars['Int']>;
  searchAndReplaceContentUrls?: Maybe<SitePluginPluginOptionsSearchAndReplaceContentUrls>;
  includedRoutes?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  baseUrl?: Maybe<StringQueryOperatorInput>;
  protocol?: Maybe<StringQueryOperatorInput>;
  restApiRoutePrefix?: Maybe<StringQueryOperatorInput>;
  hostingWPCOM?: Maybe<BooleanQueryOperatorInput>;
  useACF?: Maybe<BooleanQueryOperatorInput>;
  verboseOutput?: Maybe<BooleanQueryOperatorInput>;
  perPage?: Maybe<IntQueryOperatorInput>;
  searchAndReplaceContentUrls?: Maybe<SitePluginPluginOptionsSearchAndReplaceContentUrlsFilterInput>;
  includedRoutes?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSearchAndReplaceContentUrls = {
  sourceUrl?: Maybe<Scalars['String']>;
  replacementUrl?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSearchAndReplaceContentUrlsFilterInput = {
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  replacementUrl?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postURLPrefix?: Maybe<Scalars['String']>;
  pageURLPrefix?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  postURLPrefix?: Maybe<StringQueryOperatorInput>;
  pageURLPrefix?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_Options = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_OptionsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_OptionsEdge>;
  nodes: Array<Wordpress__Acf_Options>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_OptionsGroupConnection>;
};


export type Wordpress__Acf_OptionsConnectionDistinctArgs = {
  field: Wordpress__Acf_OptionsFieldsEnum;
};


export type Wordpress__Acf_OptionsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_OptionsFieldsEnum;
};

export type Wordpress__Acf_OptionsEdge = {
  next?: Maybe<Wordpress__Acf_Options>;
  node: Wordpress__Acf_Options;
  previous?: Maybe<Wordpress__Acf_Options>;
};

export type Wordpress__Acf_OptionsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id';

export type Wordpress__Acf_OptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Acf_OptionsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_OptionsEdge>;
  nodes: Array<Wordpress__Acf_Options>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_OptionsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_OptionsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Category = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  taxonomy?: Maybe<Wordpress__Wp_Taxonomies>;
  _links?: Maybe<Wordpress__Category_Links>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Category_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Category_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Category_LinksAbout>>>;
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Category_LinksWp_Post_Type>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Category_LinksCuries>>>;
};

export type Wordpress__Category_LinksAbout = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksAboutFilterInput>;
};

export type Wordpress__Category_LinksCollection = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksCollectionFilterInput>;
};

export type Wordpress__Category_LinksCuries = {
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Category_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Category_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksCuriesFilterInput>;
};

export type Wordpress__Category_LinksFilterInput = {
  self?: Maybe<Wordpress__Category_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Category_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Category_LinksAboutFilterListInput>;
  wp_post_type?: Maybe<Wordpress__Category_LinksWp_Post_TypeFilterListInput>;
  curies?: Maybe<Wordpress__Category_LinksCuriesFilterListInput>;
};

export type Wordpress__Category_LinksSelf = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksSelfFilterInput>;
};

export type Wordpress__Category_LinksWp_Post_Type = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksWp_Post_TypeFilterInput>;
};

export type Wordpress__CategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__CategoryEdge>;
  nodes: Array<Wordpress__Category>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__CategoryGroupConnection>;
};


export type Wordpress__CategoryConnectionDistinctArgs = {
  field: Wordpress__CategoryFieldsEnum;
};


export type Wordpress__CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__CategoryFieldsEnum;
};

export type Wordpress__CategoryEdge = {
  next?: Maybe<Wordpress__Category>;
  node: Wordpress__Category;
  previous?: Maybe<Wordpress__Category>;
};

export type Wordpress__CategoryFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id'
  | 'count'
  | 'description'
  | 'link'
  | 'name'
  | 'slug'
  | 'wordpress_parent'
  | 'taxonomy___id'
  | 'taxonomy___parent___id'
  | 'taxonomy___parent___parent___id'
  | 'taxonomy___parent___parent___children'
  | 'taxonomy___parent___children'
  | 'taxonomy___parent___children___id'
  | 'taxonomy___parent___children___children'
  | 'taxonomy___parent___internal___content'
  | 'taxonomy___parent___internal___contentDigest'
  | 'taxonomy___parent___internal___description'
  | 'taxonomy___parent___internal___fieldOwners'
  | 'taxonomy___parent___internal___ignoreType'
  | 'taxonomy___parent___internal___mediaType'
  | 'taxonomy___parent___internal___owner'
  | 'taxonomy___parent___internal___type'
  | 'taxonomy___children'
  | 'taxonomy___children___id'
  | 'taxonomy___children___parent___id'
  | 'taxonomy___children___parent___children'
  | 'taxonomy___children___children'
  | 'taxonomy___children___children___id'
  | 'taxonomy___children___children___children'
  | 'taxonomy___children___internal___content'
  | 'taxonomy___children___internal___contentDigest'
  | 'taxonomy___children___internal___description'
  | 'taxonomy___children___internal___fieldOwners'
  | 'taxonomy___children___internal___ignoreType'
  | 'taxonomy___children___internal___mediaType'
  | 'taxonomy___children___internal___owner'
  | 'taxonomy___children___internal___type'
  | 'taxonomy___internal___content'
  | 'taxonomy___internal___contentDigest'
  | 'taxonomy___internal___description'
  | 'taxonomy___internal___fieldOwners'
  | 'taxonomy___internal___ignoreType'
  | 'taxonomy___internal___mediaType'
  | 'taxonomy___internal___owner'
  | 'taxonomy___internal___type'
  | 'taxonomy___wordpress_id'
  | 'taxonomy___name'
  | 'taxonomy___slug'
  | 'taxonomy___description'
  | 'taxonomy___types'
  | 'taxonomy___hierarchical'
  | 'taxonomy___rest_base'
  | 'taxonomy____links___collection'
  | 'taxonomy____links___collection___href'
  | 'taxonomy____links___wp_items'
  | 'taxonomy____links___wp_items___href'
  | 'taxonomy____links___curies'
  | 'taxonomy____links___curies___name'
  | 'taxonomy____links___curies___href'
  | 'taxonomy____links___curies___templated'
  | '_links___self'
  | '_links___self___href'
  | '_links___collection'
  | '_links___collection___href'
  | '_links___about'
  | '_links___about___href'
  | '_links___wp_post_type'
  | '_links___wp_post_type___href'
  | '_links___curies'
  | '_links___curies___name'
  | '_links___curies___href'
  | '_links___curies___templated'
  | 'path';

export type Wordpress__CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  _links?: Maybe<Wordpress__Category_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__CategoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__CategoryFilterInput>;
};

export type Wordpress__CategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__CategoryEdge>;
  nodes: Array<Wordpress__Category>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__CategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Page = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  menu_order?: Maybe<Scalars['Int']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  author?: Maybe<Wordpress__Wp_Users>;
  parent_element?: Maybe<Wordpress__Page>;
  _links?: Maybe<Wordpress__Page_Links>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__PageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__PageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Page_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Page_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Page_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Page_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Page_LinksReplies>>>;
  version_history?: Maybe<Array<Maybe<Wordpress__Page_LinksVersion_History>>>;
  predecessor_version?: Maybe<Array<Maybe<Wordpress__Page_LinksPredecessor_Version>>>;
  up?: Maybe<Array<Maybe<Wordpress__Page_LinksUp>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Page_LinksWp_Attachment>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Page_LinksCuries>>>;
};

export type Wordpress__Page_LinksAbout = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksAboutFilterInput>;
};

export type Wordpress__Page_LinksAuthor = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksAuthorFilterInput>;
};

export type Wordpress__Page_LinksCollection = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksCollectionFilterInput>;
};

export type Wordpress__Page_LinksCuries = {
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Page_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Page_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksCuriesFilterInput>;
};

export type Wordpress__Page_LinksFilterInput = {
  self?: Maybe<Wordpress__Page_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Page_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Page_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Page_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Page_LinksRepliesFilterListInput>;
  version_history?: Maybe<Wordpress__Page_LinksVersion_HistoryFilterListInput>;
  predecessor_version?: Maybe<Wordpress__Page_LinksPredecessor_VersionFilterListInput>;
  up?: Maybe<Wordpress__Page_LinksUpFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Page_LinksWp_AttachmentFilterListInput>;
  curies?: Maybe<Wordpress__Page_LinksCuriesFilterListInput>;
};

export type Wordpress__Page_LinksPredecessor_Version = {
  wordpress_id?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksPredecessor_VersionFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksPredecessor_VersionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksPredecessor_VersionFilterInput>;
};

export type Wordpress__Page_LinksReplies = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksRepliesFilterInput>;
};

export type Wordpress__Page_LinksSelf = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksSelfFilterInput>;
};

export type Wordpress__Page_LinksUp = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksUpFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksUpFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksUpFilterInput>;
};

export type Wordpress__Page_LinksVersion_History = {
  count?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksVersion_HistoryFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksVersion_HistoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksVersion_HistoryFilterInput>;
};

export type Wordpress__Page_LinksWp_Attachment = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__PageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PageEdge>;
  nodes: Array<Wordpress__Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__PageGroupConnection>;
};


export type Wordpress__PageConnectionDistinctArgs = {
  field: Wordpress__PageFieldsEnum;
};


export type Wordpress__PageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__PageFieldsEnum;
};

export type Wordpress__PageEdge = {
  next?: Maybe<Wordpress__Page>;
  node: Wordpress__Page;
  previous?: Maybe<Wordpress__Page>;
};

export type Wordpress__PageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id'
  | 'date'
  | 'guid'
  | 'modified'
  | 'slug'
  | 'status'
  | 'type'
  | 'link'
  | 'title'
  | 'content'
  | 'excerpt'
  | 'wordpress_parent'
  | 'menu_order'
  | 'comment_status'
  | 'ping_status'
  | 'template'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___wordpress_id'
  | 'author___name'
  | 'author___url'
  | 'author___description'
  | 'author___link'
  | 'author___slug'
  | 'author___avatar_urls___wordpress_24'
  | 'author___avatar_urls___wordpress_48'
  | 'author___avatar_urls___wordpress_96'
  | 'author___authored_wordpress__POST'
  | 'author___authored_wordpress__POST___id'
  | 'author___authored_wordpress__POST___parent___id'
  | 'author___authored_wordpress__POST___parent___children'
  | 'author___authored_wordpress__POST___children'
  | 'author___authored_wordpress__POST___children___id'
  | 'author___authored_wordpress__POST___children___children'
  | 'author___authored_wordpress__POST___internal___content'
  | 'author___authored_wordpress__POST___internal___contentDigest'
  | 'author___authored_wordpress__POST___internal___description'
  | 'author___authored_wordpress__POST___internal___fieldOwners'
  | 'author___authored_wordpress__POST___internal___ignoreType'
  | 'author___authored_wordpress__POST___internal___mediaType'
  | 'author___authored_wordpress__POST___internal___owner'
  | 'author___authored_wordpress__POST___internal___type'
  | 'author___authored_wordpress__POST___wordpress_id'
  | 'author___authored_wordpress__POST___date'
  | 'author___authored_wordpress__POST___guid'
  | 'author___authored_wordpress__POST___modified'
  | 'author___authored_wordpress__POST___slug'
  | 'author___authored_wordpress__POST___status'
  | 'author___authored_wordpress__POST___type'
  | 'author___authored_wordpress__POST___link'
  | 'author___authored_wordpress__POST___title'
  | 'author___authored_wordpress__POST___content'
  | 'author___authored_wordpress__POST___excerpt'
  | 'author___authored_wordpress__POST___comment_status'
  | 'author___authored_wordpress__POST___ping_status'
  | 'author___authored_wordpress__POST___sticky'
  | 'author___authored_wordpress__POST___template'
  | 'author___authored_wordpress__POST___format'
  | 'author___authored_wordpress__POST___author___id'
  | 'author___authored_wordpress__POST___author___children'
  | 'author___authored_wordpress__POST___author___wordpress_id'
  | 'author___authored_wordpress__POST___author___name'
  | 'author___authored_wordpress__POST___author___url'
  | 'author___authored_wordpress__POST___author___description'
  | 'author___authored_wordpress__POST___author___link'
  | 'author___authored_wordpress__POST___author___slug'
  | 'author___authored_wordpress__POST___author___authored_wordpress__POST'
  | 'author___authored_wordpress__POST___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__POST___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__POST___author___path'
  | 'author___authored_wordpress__POST___categories'
  | 'author___authored_wordpress__POST___categories___id'
  | 'author___authored_wordpress__POST___categories___children'
  | 'author___authored_wordpress__POST___categories___wordpress_id'
  | 'author___authored_wordpress__POST___categories___count'
  | 'author___authored_wordpress__POST___categories___description'
  | 'author___authored_wordpress__POST___categories___link'
  | 'author___authored_wordpress__POST___categories___name'
  | 'author___authored_wordpress__POST___categories___slug'
  | 'author___authored_wordpress__POST___categories___wordpress_parent'
  | 'author___authored_wordpress__POST___categories___path'
  | 'author___authored_wordpress__POST____links___self'
  | 'author___authored_wordpress__POST____links___collection'
  | 'author___authored_wordpress__POST____links___about'
  | 'author___authored_wordpress__POST____links___author'
  | 'author___authored_wordpress__POST____links___replies'
  | 'author___authored_wordpress__POST____links___version_history'
  | 'author___authored_wordpress__POST____links___predecessor_version'
  | 'author___authored_wordpress__POST____links___wp_attachment'
  | 'author___authored_wordpress__POST____links___wp_term'
  | 'author___authored_wordpress__POST____links___curies'
  | 'author___authored_wordpress__POST___path'
  | 'author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__PAGE___id'
  | 'author___authored_wordpress__PAGE___parent___id'
  | 'author___authored_wordpress__PAGE___parent___children'
  | 'author___authored_wordpress__PAGE___children'
  | 'author___authored_wordpress__PAGE___children___id'
  | 'author___authored_wordpress__PAGE___children___children'
  | 'author___authored_wordpress__PAGE___internal___content'
  | 'author___authored_wordpress__PAGE___internal___contentDigest'
  | 'author___authored_wordpress__PAGE___internal___description'
  | 'author___authored_wordpress__PAGE___internal___fieldOwners'
  | 'author___authored_wordpress__PAGE___internal___ignoreType'
  | 'author___authored_wordpress__PAGE___internal___mediaType'
  | 'author___authored_wordpress__PAGE___internal___owner'
  | 'author___authored_wordpress__PAGE___internal___type'
  | 'author___authored_wordpress__PAGE___wordpress_id'
  | 'author___authored_wordpress__PAGE___date'
  | 'author___authored_wordpress__PAGE___guid'
  | 'author___authored_wordpress__PAGE___modified'
  | 'author___authored_wordpress__PAGE___slug'
  | 'author___authored_wordpress__PAGE___status'
  | 'author___authored_wordpress__PAGE___type'
  | 'author___authored_wordpress__PAGE___link'
  | 'author___authored_wordpress__PAGE___title'
  | 'author___authored_wordpress__PAGE___content'
  | 'author___authored_wordpress__PAGE___excerpt'
  | 'author___authored_wordpress__PAGE___wordpress_parent'
  | 'author___authored_wordpress__PAGE___menu_order'
  | 'author___authored_wordpress__PAGE___comment_status'
  | 'author___authored_wordpress__PAGE___ping_status'
  | 'author___authored_wordpress__PAGE___template'
  | 'author___authored_wordpress__PAGE___author___id'
  | 'author___authored_wordpress__PAGE___author___children'
  | 'author___authored_wordpress__PAGE___author___wordpress_id'
  | 'author___authored_wordpress__PAGE___author___name'
  | 'author___authored_wordpress__PAGE___author___url'
  | 'author___authored_wordpress__PAGE___author___description'
  | 'author___authored_wordpress__PAGE___author___link'
  | 'author___authored_wordpress__PAGE___author___slug'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__POST'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__PAGE___author___path'
  | 'author___authored_wordpress__PAGE___parent_element___id'
  | 'author___authored_wordpress__PAGE___parent_element___children'
  | 'author___authored_wordpress__PAGE___parent_element___wordpress_id'
  | 'author___authored_wordpress__PAGE___parent_element___date'
  | 'author___authored_wordpress__PAGE___parent_element___guid'
  | 'author___authored_wordpress__PAGE___parent_element___modified'
  | 'author___authored_wordpress__PAGE___parent_element___slug'
  | 'author___authored_wordpress__PAGE___parent_element___status'
  | 'author___authored_wordpress__PAGE___parent_element___type'
  | 'author___authored_wordpress__PAGE___parent_element___link'
  | 'author___authored_wordpress__PAGE___parent_element___title'
  | 'author___authored_wordpress__PAGE___parent_element___content'
  | 'author___authored_wordpress__PAGE___parent_element___excerpt'
  | 'author___authored_wordpress__PAGE___parent_element___wordpress_parent'
  | 'author___authored_wordpress__PAGE___parent_element___menu_order'
  | 'author___authored_wordpress__PAGE___parent_element___comment_status'
  | 'author___authored_wordpress__PAGE___parent_element___ping_status'
  | 'author___authored_wordpress__PAGE___parent_element___template'
  | 'author___authored_wordpress__PAGE___parent_element___path'
  | 'author___authored_wordpress__PAGE____links___self'
  | 'author___authored_wordpress__PAGE____links___collection'
  | 'author___authored_wordpress__PAGE____links___about'
  | 'author___authored_wordpress__PAGE____links___author'
  | 'author___authored_wordpress__PAGE____links___replies'
  | 'author___authored_wordpress__PAGE____links___version_history'
  | 'author___authored_wordpress__PAGE____links___predecessor_version'
  | 'author___authored_wordpress__PAGE____links___up'
  | 'author___authored_wordpress__PAGE____links___wp_attachment'
  | 'author___authored_wordpress__PAGE____links___curies'
  | 'author___authored_wordpress__PAGE___path'
  | 'author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__wp_media___id'
  | 'author___authored_wordpress__wp_media___parent___id'
  | 'author___authored_wordpress__wp_media___parent___children'
  | 'author___authored_wordpress__wp_media___children'
  | 'author___authored_wordpress__wp_media___children___id'
  | 'author___authored_wordpress__wp_media___children___children'
  | 'author___authored_wordpress__wp_media___internal___content'
  | 'author___authored_wordpress__wp_media___internal___contentDigest'
  | 'author___authored_wordpress__wp_media___internal___description'
  | 'author___authored_wordpress__wp_media___internal___fieldOwners'
  | 'author___authored_wordpress__wp_media___internal___ignoreType'
  | 'author___authored_wordpress__wp_media___internal___mediaType'
  | 'author___authored_wordpress__wp_media___internal___owner'
  | 'author___authored_wordpress__wp_media___internal___type'
  | 'author___authored_wordpress__wp_media___wordpress_id'
  | 'author___authored_wordpress__wp_media___date'
  | 'author___authored_wordpress__wp_media___modified'
  | 'author___authored_wordpress__wp_media___slug'
  | 'author___authored_wordpress__wp_media___status'
  | 'author___authored_wordpress__wp_media___type'
  | 'author___authored_wordpress__wp_media___link'
  | 'author___authored_wordpress__wp_media___title'
  | 'author___authored_wordpress__wp_media___comment_status'
  | 'author___authored_wordpress__wp_media___ping_status'
  | 'author___authored_wordpress__wp_media___template'
  | 'author___authored_wordpress__wp_media___description'
  | 'author___authored_wordpress__wp_media___caption'
  | 'author___authored_wordpress__wp_media___alt_text'
  | 'author___authored_wordpress__wp_media___media_type'
  | 'author___authored_wordpress__wp_media___mime_type'
  | 'author___authored_wordpress__wp_media___media_details___width'
  | 'author___authored_wordpress__wp_media___media_details___height'
  | 'author___authored_wordpress__wp_media___media_details___file'
  | 'author___authored_wordpress__wp_media___source_url'
  | 'author___authored_wordpress__wp_media___author___id'
  | 'author___authored_wordpress__wp_media___author___children'
  | 'author___authored_wordpress__wp_media___author___wordpress_id'
  | 'author___authored_wordpress__wp_media___author___name'
  | 'author___authored_wordpress__wp_media___author___url'
  | 'author___authored_wordpress__wp_media___author___description'
  | 'author___authored_wordpress__wp_media___author___link'
  | 'author___authored_wordpress__wp_media___author___slug'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__POST'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__wp_media___author___path'
  | 'author___authored_wordpress__wp_media___guid___id'
  | 'author___authored_wordpress__wp_media___guid___children'
  | 'author___authored_wordpress__wp_media___guid___wordpress_id'
  | 'author___authored_wordpress__wp_media___guid___date'
  | 'author___authored_wordpress__wp_media___guid___modified'
  | 'author___authored_wordpress__wp_media___guid___slug'
  | 'author___authored_wordpress__wp_media___guid___status'
  | 'author___authored_wordpress__wp_media___guid___type'
  | 'author___authored_wordpress__wp_media___guid___link'
  | 'author___authored_wordpress__wp_media___guid___title'
  | 'author___authored_wordpress__wp_media___guid___comment_status'
  | 'author___authored_wordpress__wp_media___guid___ping_status'
  | 'author___authored_wordpress__wp_media___guid___template'
  | 'author___authored_wordpress__wp_media___guid___description'
  | 'author___authored_wordpress__wp_media___guid___caption'
  | 'author___authored_wordpress__wp_media___guid___alt_text'
  | 'author___authored_wordpress__wp_media___guid___media_type'
  | 'author___authored_wordpress__wp_media___guid___mime_type'
  | 'author___authored_wordpress__wp_media___guid___source_url'
  | 'author___authored_wordpress__wp_media___guid___path'
  | 'author___authored_wordpress__wp_media___localFile___sourceInstanceName'
  | 'author___authored_wordpress__wp_media___localFile___absolutePath'
  | 'author___authored_wordpress__wp_media___localFile___relativePath'
  | 'author___authored_wordpress__wp_media___localFile___extension'
  | 'author___authored_wordpress__wp_media___localFile___size'
  | 'author___authored_wordpress__wp_media___localFile___prettySize'
  | 'author___authored_wordpress__wp_media___localFile___modifiedTime'
  | 'author___authored_wordpress__wp_media___localFile___accessTime'
  | 'author___authored_wordpress__wp_media___localFile___changeTime'
  | 'author___authored_wordpress__wp_media___localFile___birthTime'
  | 'author___authored_wordpress__wp_media___localFile___root'
  | 'author___authored_wordpress__wp_media___localFile___dir'
  | 'author___authored_wordpress__wp_media___localFile___base'
  | 'author___authored_wordpress__wp_media___localFile___ext'
  | 'author___authored_wordpress__wp_media___localFile___name'
  | 'author___authored_wordpress__wp_media___localFile___relativeDirectory'
  | 'author___authored_wordpress__wp_media___localFile___dev'
  | 'author___authored_wordpress__wp_media___localFile___mode'
  | 'author___authored_wordpress__wp_media___localFile___nlink'
  | 'author___authored_wordpress__wp_media___localFile___uid'
  | 'author___authored_wordpress__wp_media___localFile___gid'
  | 'author___authored_wordpress__wp_media___localFile___rdev'
  | 'author___authored_wordpress__wp_media___localFile___ino'
  | 'author___authored_wordpress__wp_media___localFile___atimeMs'
  | 'author___authored_wordpress__wp_media___localFile___mtimeMs'
  | 'author___authored_wordpress__wp_media___localFile___ctimeMs'
  | 'author___authored_wordpress__wp_media___localFile___atime'
  | 'author___authored_wordpress__wp_media___localFile___mtime'
  | 'author___authored_wordpress__wp_media___localFile___ctime'
  | 'author___authored_wordpress__wp_media___localFile___birthtime'
  | 'author___authored_wordpress__wp_media___localFile___birthtimeMs'
  | 'author___authored_wordpress__wp_media___localFile___blksize'
  | 'author___authored_wordpress__wp_media___localFile___blocks'
  | 'author___authored_wordpress__wp_media___localFile___url'
  | 'author___authored_wordpress__wp_media___localFile___id'
  | 'author___authored_wordpress__wp_media___localFile___children'
  | 'author___authored_wordpress__wp_media____links___self'
  | 'author___authored_wordpress__wp_media____links___collection'
  | 'author___authored_wordpress__wp_media____links___about'
  | 'author___authored_wordpress__wp_media____links___author'
  | 'author___authored_wordpress__wp_media____links___replies'
  | 'author___authored_wordpress__wp_media___path'
  | 'author____links___self'
  | 'author____links___self___href'
  | 'author____links___collection'
  | 'author____links___collection___href'
  | 'author___path'
  | 'parent_element___id'
  | 'parent_element___parent___id'
  | 'parent_element___parent___parent___id'
  | 'parent_element___parent___parent___children'
  | 'parent_element___parent___children'
  | 'parent_element___parent___children___id'
  | 'parent_element___parent___children___children'
  | 'parent_element___parent___internal___content'
  | 'parent_element___parent___internal___contentDigest'
  | 'parent_element___parent___internal___description'
  | 'parent_element___parent___internal___fieldOwners'
  | 'parent_element___parent___internal___ignoreType'
  | 'parent_element___parent___internal___mediaType'
  | 'parent_element___parent___internal___owner'
  | 'parent_element___parent___internal___type'
  | 'parent_element___children'
  | 'parent_element___children___id'
  | 'parent_element___children___parent___id'
  | 'parent_element___children___parent___children'
  | 'parent_element___children___children'
  | 'parent_element___children___children___id'
  | 'parent_element___children___children___children'
  | 'parent_element___children___internal___content'
  | 'parent_element___children___internal___contentDigest'
  | 'parent_element___children___internal___description'
  | 'parent_element___children___internal___fieldOwners'
  | 'parent_element___children___internal___ignoreType'
  | 'parent_element___children___internal___mediaType'
  | 'parent_element___children___internal___owner'
  | 'parent_element___children___internal___type'
  | 'parent_element___internal___content'
  | 'parent_element___internal___contentDigest'
  | 'parent_element___internal___description'
  | 'parent_element___internal___fieldOwners'
  | 'parent_element___internal___ignoreType'
  | 'parent_element___internal___mediaType'
  | 'parent_element___internal___owner'
  | 'parent_element___internal___type'
  | 'parent_element___wordpress_id'
  | 'parent_element___date'
  | 'parent_element___guid'
  | 'parent_element___modified'
  | 'parent_element___slug'
  | 'parent_element___status'
  | 'parent_element___type'
  | 'parent_element___link'
  | 'parent_element___title'
  | 'parent_element___content'
  | 'parent_element___excerpt'
  | 'parent_element___wordpress_parent'
  | 'parent_element___menu_order'
  | 'parent_element___comment_status'
  | 'parent_element___ping_status'
  | 'parent_element___template'
  | 'parent_element___author___id'
  | 'parent_element___author___parent___id'
  | 'parent_element___author___parent___children'
  | 'parent_element___author___children'
  | 'parent_element___author___children___id'
  | 'parent_element___author___children___children'
  | 'parent_element___author___internal___content'
  | 'parent_element___author___internal___contentDigest'
  | 'parent_element___author___internal___description'
  | 'parent_element___author___internal___fieldOwners'
  | 'parent_element___author___internal___ignoreType'
  | 'parent_element___author___internal___mediaType'
  | 'parent_element___author___internal___owner'
  | 'parent_element___author___internal___type'
  | 'parent_element___author___wordpress_id'
  | 'parent_element___author___name'
  | 'parent_element___author___url'
  | 'parent_element___author___description'
  | 'parent_element___author___link'
  | 'parent_element___author___slug'
  | 'parent_element___author___avatar_urls___wordpress_24'
  | 'parent_element___author___avatar_urls___wordpress_48'
  | 'parent_element___author___avatar_urls___wordpress_96'
  | 'parent_element___author___authored_wordpress__POST'
  | 'parent_element___author___authored_wordpress__POST___id'
  | 'parent_element___author___authored_wordpress__POST___children'
  | 'parent_element___author___authored_wordpress__POST___wordpress_id'
  | 'parent_element___author___authored_wordpress__POST___date'
  | 'parent_element___author___authored_wordpress__POST___guid'
  | 'parent_element___author___authored_wordpress__POST___modified'
  | 'parent_element___author___authored_wordpress__POST___slug'
  | 'parent_element___author___authored_wordpress__POST___status'
  | 'parent_element___author___authored_wordpress__POST___type'
  | 'parent_element___author___authored_wordpress__POST___link'
  | 'parent_element___author___authored_wordpress__POST___title'
  | 'parent_element___author___authored_wordpress__POST___content'
  | 'parent_element___author___authored_wordpress__POST___excerpt'
  | 'parent_element___author___authored_wordpress__POST___comment_status'
  | 'parent_element___author___authored_wordpress__POST___ping_status'
  | 'parent_element___author___authored_wordpress__POST___sticky'
  | 'parent_element___author___authored_wordpress__POST___template'
  | 'parent_element___author___authored_wordpress__POST___format'
  | 'parent_element___author___authored_wordpress__POST___categories'
  | 'parent_element___author___authored_wordpress__POST___path'
  | 'parent_element___author___authored_wordpress__PAGE'
  | 'parent_element___author___authored_wordpress__PAGE___id'
  | 'parent_element___author___authored_wordpress__PAGE___children'
  | 'parent_element___author___authored_wordpress__PAGE___wordpress_id'
  | 'parent_element___author___authored_wordpress__PAGE___date'
  | 'parent_element___author___authored_wordpress__PAGE___guid'
  | 'parent_element___author___authored_wordpress__PAGE___modified'
  | 'parent_element___author___authored_wordpress__PAGE___slug'
  | 'parent_element___author___authored_wordpress__PAGE___status'
  | 'parent_element___author___authored_wordpress__PAGE___type'
  | 'parent_element___author___authored_wordpress__PAGE___link'
  | 'parent_element___author___authored_wordpress__PAGE___title'
  | 'parent_element___author___authored_wordpress__PAGE___content'
  | 'parent_element___author___authored_wordpress__PAGE___excerpt'
  | 'parent_element___author___authored_wordpress__PAGE___wordpress_parent'
  | 'parent_element___author___authored_wordpress__PAGE___menu_order'
  | 'parent_element___author___authored_wordpress__PAGE___comment_status'
  | 'parent_element___author___authored_wordpress__PAGE___ping_status'
  | 'parent_element___author___authored_wordpress__PAGE___template'
  | 'parent_element___author___authored_wordpress__PAGE___path'
  | 'parent_element___author___authored_wordpress__wp_media'
  | 'parent_element___author___authored_wordpress__wp_media___id'
  | 'parent_element___author___authored_wordpress__wp_media___children'
  | 'parent_element___author___authored_wordpress__wp_media___wordpress_id'
  | 'parent_element___author___authored_wordpress__wp_media___date'
  | 'parent_element___author___authored_wordpress__wp_media___modified'
  | 'parent_element___author___authored_wordpress__wp_media___slug'
  | 'parent_element___author___authored_wordpress__wp_media___status'
  | 'parent_element___author___authored_wordpress__wp_media___type'
  | 'parent_element___author___authored_wordpress__wp_media___link'
  | 'parent_element___author___authored_wordpress__wp_media___title'
  | 'parent_element___author___authored_wordpress__wp_media___comment_status'
  | 'parent_element___author___authored_wordpress__wp_media___ping_status'
  | 'parent_element___author___authored_wordpress__wp_media___template'
  | 'parent_element___author___authored_wordpress__wp_media___description'
  | 'parent_element___author___authored_wordpress__wp_media___caption'
  | 'parent_element___author___authored_wordpress__wp_media___alt_text'
  | 'parent_element___author___authored_wordpress__wp_media___media_type'
  | 'parent_element___author___authored_wordpress__wp_media___mime_type'
  | 'parent_element___author___authored_wordpress__wp_media___source_url'
  | 'parent_element___author___authored_wordpress__wp_media___path'
  | 'parent_element___author____links___self'
  | 'parent_element___author____links___collection'
  | 'parent_element___author___path'
  | 'parent_element___parent_element___id'
  | 'parent_element___parent_element___parent___id'
  | 'parent_element___parent_element___parent___children'
  | 'parent_element___parent_element___children'
  | 'parent_element___parent_element___children___id'
  | 'parent_element___parent_element___children___children'
  | 'parent_element___parent_element___internal___content'
  | 'parent_element___parent_element___internal___contentDigest'
  | 'parent_element___parent_element___internal___description'
  | 'parent_element___parent_element___internal___fieldOwners'
  | 'parent_element___parent_element___internal___ignoreType'
  | 'parent_element___parent_element___internal___mediaType'
  | 'parent_element___parent_element___internal___owner'
  | 'parent_element___parent_element___internal___type'
  | 'parent_element___parent_element___wordpress_id'
  | 'parent_element___parent_element___date'
  | 'parent_element___parent_element___guid'
  | 'parent_element___parent_element___modified'
  | 'parent_element___parent_element___slug'
  | 'parent_element___parent_element___status'
  | 'parent_element___parent_element___type'
  | 'parent_element___parent_element___link'
  | 'parent_element___parent_element___title'
  | 'parent_element___parent_element___content'
  | 'parent_element___parent_element___excerpt'
  | 'parent_element___parent_element___wordpress_parent'
  | 'parent_element___parent_element___menu_order'
  | 'parent_element___parent_element___comment_status'
  | 'parent_element___parent_element___ping_status'
  | 'parent_element___parent_element___template'
  | 'parent_element___parent_element___author___id'
  | 'parent_element___parent_element___author___children'
  | 'parent_element___parent_element___author___wordpress_id'
  | 'parent_element___parent_element___author___name'
  | 'parent_element___parent_element___author___url'
  | 'parent_element___parent_element___author___description'
  | 'parent_element___parent_element___author___link'
  | 'parent_element___parent_element___author___slug'
  | 'parent_element___parent_element___author___authored_wordpress__POST'
  | 'parent_element___parent_element___author___authored_wordpress__PAGE'
  | 'parent_element___parent_element___author___authored_wordpress__wp_media'
  | 'parent_element___parent_element___author___path'
  | 'parent_element___parent_element___parent_element___id'
  | 'parent_element___parent_element___parent_element___children'
  | 'parent_element___parent_element___parent_element___wordpress_id'
  | 'parent_element___parent_element___parent_element___date'
  | 'parent_element___parent_element___parent_element___guid'
  | 'parent_element___parent_element___parent_element___modified'
  | 'parent_element___parent_element___parent_element___slug'
  | 'parent_element___parent_element___parent_element___status'
  | 'parent_element___parent_element___parent_element___type'
  | 'parent_element___parent_element___parent_element___link'
  | 'parent_element___parent_element___parent_element___title'
  | 'parent_element___parent_element___parent_element___content'
  | 'parent_element___parent_element___parent_element___excerpt'
  | 'parent_element___parent_element___parent_element___wordpress_parent'
  | 'parent_element___parent_element___parent_element___menu_order'
  | 'parent_element___parent_element___parent_element___comment_status'
  | 'parent_element___parent_element___parent_element___ping_status'
  | 'parent_element___parent_element___parent_element___template'
  | 'parent_element___parent_element___parent_element___path'
  | 'parent_element___parent_element____links___self'
  | 'parent_element___parent_element____links___collection'
  | 'parent_element___parent_element____links___about'
  | 'parent_element___parent_element____links___author'
  | 'parent_element___parent_element____links___replies'
  | 'parent_element___parent_element____links___version_history'
  | 'parent_element___parent_element____links___predecessor_version'
  | 'parent_element___parent_element____links___up'
  | 'parent_element___parent_element____links___wp_attachment'
  | 'parent_element___parent_element____links___curies'
  | 'parent_element___parent_element___path'
  | 'parent_element____links___self'
  | 'parent_element____links___self___href'
  | 'parent_element____links___collection'
  | 'parent_element____links___collection___href'
  | 'parent_element____links___about'
  | 'parent_element____links___about___href'
  | 'parent_element____links___author'
  | 'parent_element____links___author___embeddable'
  | 'parent_element____links___author___href'
  | 'parent_element____links___replies'
  | 'parent_element____links___replies___embeddable'
  | 'parent_element____links___replies___href'
  | 'parent_element____links___version_history'
  | 'parent_element____links___version_history___count'
  | 'parent_element____links___version_history___href'
  | 'parent_element____links___predecessor_version'
  | 'parent_element____links___predecessor_version___wordpress_id'
  | 'parent_element____links___predecessor_version___href'
  | 'parent_element____links___up'
  | 'parent_element____links___up___embeddable'
  | 'parent_element____links___up___href'
  | 'parent_element____links___wp_attachment'
  | 'parent_element____links___wp_attachment___href'
  | 'parent_element____links___curies'
  | 'parent_element____links___curies___name'
  | 'parent_element____links___curies___href'
  | 'parent_element____links___curies___templated'
  | 'parent_element___path'
  | '_links___self'
  | '_links___self___href'
  | '_links___collection'
  | '_links___collection___href'
  | '_links___about'
  | '_links___about___href'
  | '_links___author'
  | '_links___author___embeddable'
  | '_links___author___href'
  | '_links___replies'
  | '_links___replies___embeddable'
  | '_links___replies___href'
  | '_links___version_history'
  | '_links___version_history___count'
  | '_links___version_history___href'
  | '_links___predecessor_version'
  | '_links___predecessor_version___wordpress_id'
  | '_links___predecessor_version___href'
  | '_links___up'
  | '_links___up___embeddable'
  | '_links___up___href'
  | '_links___wp_attachment'
  | '_links___wp_attachment___href'
  | '_links___curies'
  | '_links___curies___name'
  | '_links___curies___href'
  | '_links___curies___templated'
  | 'path';

export type Wordpress__PageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  parent_element?: Maybe<Wordpress__PageFilterInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageFilterInput>;
};

export type Wordpress__PageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PageEdge>;
  nodes: Array<Wordpress__Page>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__PageSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__PageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__PagEwordpress__PosTwordpress__Wp_MediaUnion = Wordpress__Page | Wordpress__Post | Wordpress__Wp_Media;

export type Wordpress__Post = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['Boolean']>;
  template?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  author?: Maybe<Wordpress__Wp_Users>;
  categories?: Maybe<Array<Maybe<Wordpress__Category>>>;
  _links?: Maybe<Wordpress__Post_Links>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__PostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__PostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Post_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Post_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Post_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Post_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Post_LinksReplies>>>;
  version_history?: Maybe<Array<Maybe<Wordpress__Post_LinksVersion_History>>>;
  predecessor_version?: Maybe<Array<Maybe<Wordpress__Post_LinksPredecessor_Version>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Attachment>>>;
  wp_term?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Term>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Post_LinksCuries>>>;
};

export type Wordpress__Post_LinksAbout = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksAboutFilterInput>;
};

export type Wordpress__Post_LinksAuthor = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksAuthorFilterInput>;
};

export type Wordpress__Post_LinksCollection = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksCollectionFilterInput>;
};

export type Wordpress__Post_LinksCuries = {
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Post_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Post_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksCuriesFilterInput>;
};

export type Wordpress__Post_LinksFilterInput = {
  self?: Maybe<Wordpress__Post_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Post_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Post_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Post_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Post_LinksRepliesFilterListInput>;
  version_history?: Maybe<Wordpress__Post_LinksVersion_HistoryFilterListInput>;
  predecessor_version?: Maybe<Wordpress__Post_LinksPredecessor_VersionFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Post_LinksWp_AttachmentFilterListInput>;
  wp_term?: Maybe<Wordpress__Post_LinksWp_TermFilterListInput>;
  curies?: Maybe<Wordpress__Post_LinksCuriesFilterListInput>;
};

export type Wordpress__Post_LinksPredecessor_Version = {
  wordpress_id?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksPredecessor_VersionFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksPredecessor_VersionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksPredecessor_VersionFilterInput>;
};

export type Wordpress__Post_LinksReplies = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksRepliesFilterInput>;
};

export type Wordpress__Post_LinksSelf = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksSelfFilterInput>;
};

export type Wordpress__Post_LinksVersion_History = {
  count?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksVersion_HistoryFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksVersion_HistoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksVersion_HistoryFilterInput>;
};

export type Wordpress__Post_LinksWp_Attachment = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__Post_LinksWp_Term = {
  taxonomy?: Maybe<Scalars['String']>;
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_TermFilterInput = {
  taxonomy?: Maybe<StringQueryOperatorInput>;
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_TermFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_TermFilterInput>;
};

export type Wordpress__PostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PostEdge>;
  nodes: Array<Wordpress__Post>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__PostGroupConnection>;
};


export type Wordpress__PostConnectionDistinctArgs = {
  field: Wordpress__PostFieldsEnum;
};


export type Wordpress__PostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__PostFieldsEnum;
};

export type Wordpress__PostEdge = {
  next?: Maybe<Wordpress__Post>;
  node: Wordpress__Post;
  previous?: Maybe<Wordpress__Post>;
};

export type Wordpress__PostFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id'
  | 'date'
  | 'guid'
  | 'modified'
  | 'slug'
  | 'status'
  | 'type'
  | 'link'
  | 'title'
  | 'content'
  | 'excerpt'
  | 'comment_status'
  | 'ping_status'
  | 'sticky'
  | 'template'
  | 'format'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___wordpress_id'
  | 'author___name'
  | 'author___url'
  | 'author___description'
  | 'author___link'
  | 'author___slug'
  | 'author___avatar_urls___wordpress_24'
  | 'author___avatar_urls___wordpress_48'
  | 'author___avatar_urls___wordpress_96'
  | 'author___authored_wordpress__POST'
  | 'author___authored_wordpress__POST___id'
  | 'author___authored_wordpress__POST___parent___id'
  | 'author___authored_wordpress__POST___parent___children'
  | 'author___authored_wordpress__POST___children'
  | 'author___authored_wordpress__POST___children___id'
  | 'author___authored_wordpress__POST___children___children'
  | 'author___authored_wordpress__POST___internal___content'
  | 'author___authored_wordpress__POST___internal___contentDigest'
  | 'author___authored_wordpress__POST___internal___description'
  | 'author___authored_wordpress__POST___internal___fieldOwners'
  | 'author___authored_wordpress__POST___internal___ignoreType'
  | 'author___authored_wordpress__POST___internal___mediaType'
  | 'author___authored_wordpress__POST___internal___owner'
  | 'author___authored_wordpress__POST___internal___type'
  | 'author___authored_wordpress__POST___wordpress_id'
  | 'author___authored_wordpress__POST___date'
  | 'author___authored_wordpress__POST___guid'
  | 'author___authored_wordpress__POST___modified'
  | 'author___authored_wordpress__POST___slug'
  | 'author___authored_wordpress__POST___status'
  | 'author___authored_wordpress__POST___type'
  | 'author___authored_wordpress__POST___link'
  | 'author___authored_wordpress__POST___title'
  | 'author___authored_wordpress__POST___content'
  | 'author___authored_wordpress__POST___excerpt'
  | 'author___authored_wordpress__POST___comment_status'
  | 'author___authored_wordpress__POST___ping_status'
  | 'author___authored_wordpress__POST___sticky'
  | 'author___authored_wordpress__POST___template'
  | 'author___authored_wordpress__POST___format'
  | 'author___authored_wordpress__POST___author___id'
  | 'author___authored_wordpress__POST___author___children'
  | 'author___authored_wordpress__POST___author___wordpress_id'
  | 'author___authored_wordpress__POST___author___name'
  | 'author___authored_wordpress__POST___author___url'
  | 'author___authored_wordpress__POST___author___description'
  | 'author___authored_wordpress__POST___author___link'
  | 'author___authored_wordpress__POST___author___slug'
  | 'author___authored_wordpress__POST___author___authored_wordpress__POST'
  | 'author___authored_wordpress__POST___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__POST___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__POST___author___path'
  | 'author___authored_wordpress__POST___categories'
  | 'author___authored_wordpress__POST___categories___id'
  | 'author___authored_wordpress__POST___categories___children'
  | 'author___authored_wordpress__POST___categories___wordpress_id'
  | 'author___authored_wordpress__POST___categories___count'
  | 'author___authored_wordpress__POST___categories___description'
  | 'author___authored_wordpress__POST___categories___link'
  | 'author___authored_wordpress__POST___categories___name'
  | 'author___authored_wordpress__POST___categories___slug'
  | 'author___authored_wordpress__POST___categories___wordpress_parent'
  | 'author___authored_wordpress__POST___categories___path'
  | 'author___authored_wordpress__POST____links___self'
  | 'author___authored_wordpress__POST____links___collection'
  | 'author___authored_wordpress__POST____links___about'
  | 'author___authored_wordpress__POST____links___author'
  | 'author___authored_wordpress__POST____links___replies'
  | 'author___authored_wordpress__POST____links___version_history'
  | 'author___authored_wordpress__POST____links___predecessor_version'
  | 'author___authored_wordpress__POST____links___wp_attachment'
  | 'author___authored_wordpress__POST____links___wp_term'
  | 'author___authored_wordpress__POST____links___curies'
  | 'author___authored_wordpress__POST___path'
  | 'author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__PAGE___id'
  | 'author___authored_wordpress__PAGE___parent___id'
  | 'author___authored_wordpress__PAGE___parent___children'
  | 'author___authored_wordpress__PAGE___children'
  | 'author___authored_wordpress__PAGE___children___id'
  | 'author___authored_wordpress__PAGE___children___children'
  | 'author___authored_wordpress__PAGE___internal___content'
  | 'author___authored_wordpress__PAGE___internal___contentDigest'
  | 'author___authored_wordpress__PAGE___internal___description'
  | 'author___authored_wordpress__PAGE___internal___fieldOwners'
  | 'author___authored_wordpress__PAGE___internal___ignoreType'
  | 'author___authored_wordpress__PAGE___internal___mediaType'
  | 'author___authored_wordpress__PAGE___internal___owner'
  | 'author___authored_wordpress__PAGE___internal___type'
  | 'author___authored_wordpress__PAGE___wordpress_id'
  | 'author___authored_wordpress__PAGE___date'
  | 'author___authored_wordpress__PAGE___guid'
  | 'author___authored_wordpress__PAGE___modified'
  | 'author___authored_wordpress__PAGE___slug'
  | 'author___authored_wordpress__PAGE___status'
  | 'author___authored_wordpress__PAGE___type'
  | 'author___authored_wordpress__PAGE___link'
  | 'author___authored_wordpress__PAGE___title'
  | 'author___authored_wordpress__PAGE___content'
  | 'author___authored_wordpress__PAGE___excerpt'
  | 'author___authored_wordpress__PAGE___wordpress_parent'
  | 'author___authored_wordpress__PAGE___menu_order'
  | 'author___authored_wordpress__PAGE___comment_status'
  | 'author___authored_wordpress__PAGE___ping_status'
  | 'author___authored_wordpress__PAGE___template'
  | 'author___authored_wordpress__PAGE___author___id'
  | 'author___authored_wordpress__PAGE___author___children'
  | 'author___authored_wordpress__PAGE___author___wordpress_id'
  | 'author___authored_wordpress__PAGE___author___name'
  | 'author___authored_wordpress__PAGE___author___url'
  | 'author___authored_wordpress__PAGE___author___description'
  | 'author___authored_wordpress__PAGE___author___link'
  | 'author___authored_wordpress__PAGE___author___slug'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__POST'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__PAGE___author___path'
  | 'author___authored_wordpress__PAGE___parent_element___id'
  | 'author___authored_wordpress__PAGE___parent_element___children'
  | 'author___authored_wordpress__PAGE___parent_element___wordpress_id'
  | 'author___authored_wordpress__PAGE___parent_element___date'
  | 'author___authored_wordpress__PAGE___parent_element___guid'
  | 'author___authored_wordpress__PAGE___parent_element___modified'
  | 'author___authored_wordpress__PAGE___parent_element___slug'
  | 'author___authored_wordpress__PAGE___parent_element___status'
  | 'author___authored_wordpress__PAGE___parent_element___type'
  | 'author___authored_wordpress__PAGE___parent_element___link'
  | 'author___authored_wordpress__PAGE___parent_element___title'
  | 'author___authored_wordpress__PAGE___parent_element___content'
  | 'author___authored_wordpress__PAGE___parent_element___excerpt'
  | 'author___authored_wordpress__PAGE___parent_element___wordpress_parent'
  | 'author___authored_wordpress__PAGE___parent_element___menu_order'
  | 'author___authored_wordpress__PAGE___parent_element___comment_status'
  | 'author___authored_wordpress__PAGE___parent_element___ping_status'
  | 'author___authored_wordpress__PAGE___parent_element___template'
  | 'author___authored_wordpress__PAGE___parent_element___path'
  | 'author___authored_wordpress__PAGE____links___self'
  | 'author___authored_wordpress__PAGE____links___collection'
  | 'author___authored_wordpress__PAGE____links___about'
  | 'author___authored_wordpress__PAGE____links___author'
  | 'author___authored_wordpress__PAGE____links___replies'
  | 'author___authored_wordpress__PAGE____links___version_history'
  | 'author___authored_wordpress__PAGE____links___predecessor_version'
  | 'author___authored_wordpress__PAGE____links___up'
  | 'author___authored_wordpress__PAGE____links___wp_attachment'
  | 'author___authored_wordpress__PAGE____links___curies'
  | 'author___authored_wordpress__PAGE___path'
  | 'author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__wp_media___id'
  | 'author___authored_wordpress__wp_media___parent___id'
  | 'author___authored_wordpress__wp_media___parent___children'
  | 'author___authored_wordpress__wp_media___children'
  | 'author___authored_wordpress__wp_media___children___id'
  | 'author___authored_wordpress__wp_media___children___children'
  | 'author___authored_wordpress__wp_media___internal___content'
  | 'author___authored_wordpress__wp_media___internal___contentDigest'
  | 'author___authored_wordpress__wp_media___internal___description'
  | 'author___authored_wordpress__wp_media___internal___fieldOwners'
  | 'author___authored_wordpress__wp_media___internal___ignoreType'
  | 'author___authored_wordpress__wp_media___internal___mediaType'
  | 'author___authored_wordpress__wp_media___internal___owner'
  | 'author___authored_wordpress__wp_media___internal___type'
  | 'author___authored_wordpress__wp_media___wordpress_id'
  | 'author___authored_wordpress__wp_media___date'
  | 'author___authored_wordpress__wp_media___modified'
  | 'author___authored_wordpress__wp_media___slug'
  | 'author___authored_wordpress__wp_media___status'
  | 'author___authored_wordpress__wp_media___type'
  | 'author___authored_wordpress__wp_media___link'
  | 'author___authored_wordpress__wp_media___title'
  | 'author___authored_wordpress__wp_media___comment_status'
  | 'author___authored_wordpress__wp_media___ping_status'
  | 'author___authored_wordpress__wp_media___template'
  | 'author___authored_wordpress__wp_media___description'
  | 'author___authored_wordpress__wp_media___caption'
  | 'author___authored_wordpress__wp_media___alt_text'
  | 'author___authored_wordpress__wp_media___media_type'
  | 'author___authored_wordpress__wp_media___mime_type'
  | 'author___authored_wordpress__wp_media___media_details___width'
  | 'author___authored_wordpress__wp_media___media_details___height'
  | 'author___authored_wordpress__wp_media___media_details___file'
  | 'author___authored_wordpress__wp_media___source_url'
  | 'author___authored_wordpress__wp_media___author___id'
  | 'author___authored_wordpress__wp_media___author___children'
  | 'author___authored_wordpress__wp_media___author___wordpress_id'
  | 'author___authored_wordpress__wp_media___author___name'
  | 'author___authored_wordpress__wp_media___author___url'
  | 'author___authored_wordpress__wp_media___author___description'
  | 'author___authored_wordpress__wp_media___author___link'
  | 'author___authored_wordpress__wp_media___author___slug'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__POST'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__wp_media___author___path'
  | 'author___authored_wordpress__wp_media___guid___id'
  | 'author___authored_wordpress__wp_media___guid___children'
  | 'author___authored_wordpress__wp_media___guid___wordpress_id'
  | 'author___authored_wordpress__wp_media___guid___date'
  | 'author___authored_wordpress__wp_media___guid___modified'
  | 'author___authored_wordpress__wp_media___guid___slug'
  | 'author___authored_wordpress__wp_media___guid___status'
  | 'author___authored_wordpress__wp_media___guid___type'
  | 'author___authored_wordpress__wp_media___guid___link'
  | 'author___authored_wordpress__wp_media___guid___title'
  | 'author___authored_wordpress__wp_media___guid___comment_status'
  | 'author___authored_wordpress__wp_media___guid___ping_status'
  | 'author___authored_wordpress__wp_media___guid___template'
  | 'author___authored_wordpress__wp_media___guid___description'
  | 'author___authored_wordpress__wp_media___guid___caption'
  | 'author___authored_wordpress__wp_media___guid___alt_text'
  | 'author___authored_wordpress__wp_media___guid___media_type'
  | 'author___authored_wordpress__wp_media___guid___mime_type'
  | 'author___authored_wordpress__wp_media___guid___source_url'
  | 'author___authored_wordpress__wp_media___guid___path'
  | 'author___authored_wordpress__wp_media___localFile___sourceInstanceName'
  | 'author___authored_wordpress__wp_media___localFile___absolutePath'
  | 'author___authored_wordpress__wp_media___localFile___relativePath'
  | 'author___authored_wordpress__wp_media___localFile___extension'
  | 'author___authored_wordpress__wp_media___localFile___size'
  | 'author___authored_wordpress__wp_media___localFile___prettySize'
  | 'author___authored_wordpress__wp_media___localFile___modifiedTime'
  | 'author___authored_wordpress__wp_media___localFile___accessTime'
  | 'author___authored_wordpress__wp_media___localFile___changeTime'
  | 'author___authored_wordpress__wp_media___localFile___birthTime'
  | 'author___authored_wordpress__wp_media___localFile___root'
  | 'author___authored_wordpress__wp_media___localFile___dir'
  | 'author___authored_wordpress__wp_media___localFile___base'
  | 'author___authored_wordpress__wp_media___localFile___ext'
  | 'author___authored_wordpress__wp_media___localFile___name'
  | 'author___authored_wordpress__wp_media___localFile___relativeDirectory'
  | 'author___authored_wordpress__wp_media___localFile___dev'
  | 'author___authored_wordpress__wp_media___localFile___mode'
  | 'author___authored_wordpress__wp_media___localFile___nlink'
  | 'author___authored_wordpress__wp_media___localFile___uid'
  | 'author___authored_wordpress__wp_media___localFile___gid'
  | 'author___authored_wordpress__wp_media___localFile___rdev'
  | 'author___authored_wordpress__wp_media___localFile___ino'
  | 'author___authored_wordpress__wp_media___localFile___atimeMs'
  | 'author___authored_wordpress__wp_media___localFile___mtimeMs'
  | 'author___authored_wordpress__wp_media___localFile___ctimeMs'
  | 'author___authored_wordpress__wp_media___localFile___atime'
  | 'author___authored_wordpress__wp_media___localFile___mtime'
  | 'author___authored_wordpress__wp_media___localFile___ctime'
  | 'author___authored_wordpress__wp_media___localFile___birthtime'
  | 'author___authored_wordpress__wp_media___localFile___birthtimeMs'
  | 'author___authored_wordpress__wp_media___localFile___blksize'
  | 'author___authored_wordpress__wp_media___localFile___blocks'
  | 'author___authored_wordpress__wp_media___localFile___url'
  | 'author___authored_wordpress__wp_media___localFile___id'
  | 'author___authored_wordpress__wp_media___localFile___children'
  | 'author___authored_wordpress__wp_media____links___self'
  | 'author___authored_wordpress__wp_media____links___collection'
  | 'author___authored_wordpress__wp_media____links___about'
  | 'author___authored_wordpress__wp_media____links___author'
  | 'author___authored_wordpress__wp_media____links___replies'
  | 'author___authored_wordpress__wp_media___path'
  | 'author____links___self'
  | 'author____links___self___href'
  | 'author____links___collection'
  | 'author____links___collection___href'
  | 'author___path'
  | 'categories'
  | 'categories___id'
  | 'categories___parent___id'
  | 'categories___parent___parent___id'
  | 'categories___parent___parent___children'
  | 'categories___parent___children'
  | 'categories___parent___children___id'
  | 'categories___parent___children___children'
  | 'categories___parent___internal___content'
  | 'categories___parent___internal___contentDigest'
  | 'categories___parent___internal___description'
  | 'categories___parent___internal___fieldOwners'
  | 'categories___parent___internal___ignoreType'
  | 'categories___parent___internal___mediaType'
  | 'categories___parent___internal___owner'
  | 'categories___parent___internal___type'
  | 'categories___children'
  | 'categories___children___id'
  | 'categories___children___parent___id'
  | 'categories___children___parent___children'
  | 'categories___children___children'
  | 'categories___children___children___id'
  | 'categories___children___children___children'
  | 'categories___children___internal___content'
  | 'categories___children___internal___contentDigest'
  | 'categories___children___internal___description'
  | 'categories___children___internal___fieldOwners'
  | 'categories___children___internal___ignoreType'
  | 'categories___children___internal___mediaType'
  | 'categories___children___internal___owner'
  | 'categories___children___internal___type'
  | 'categories___internal___content'
  | 'categories___internal___contentDigest'
  | 'categories___internal___description'
  | 'categories___internal___fieldOwners'
  | 'categories___internal___ignoreType'
  | 'categories___internal___mediaType'
  | 'categories___internal___owner'
  | 'categories___internal___type'
  | 'categories___wordpress_id'
  | 'categories___count'
  | 'categories___description'
  | 'categories___link'
  | 'categories___name'
  | 'categories___slug'
  | 'categories___wordpress_parent'
  | 'categories___taxonomy___id'
  | 'categories___taxonomy___parent___id'
  | 'categories___taxonomy___parent___children'
  | 'categories___taxonomy___children'
  | 'categories___taxonomy___children___id'
  | 'categories___taxonomy___children___children'
  | 'categories___taxonomy___internal___content'
  | 'categories___taxonomy___internal___contentDigest'
  | 'categories___taxonomy___internal___description'
  | 'categories___taxonomy___internal___fieldOwners'
  | 'categories___taxonomy___internal___ignoreType'
  | 'categories___taxonomy___internal___mediaType'
  | 'categories___taxonomy___internal___owner'
  | 'categories___taxonomy___internal___type'
  | 'categories___taxonomy___wordpress_id'
  | 'categories___taxonomy___name'
  | 'categories___taxonomy___slug'
  | 'categories___taxonomy___description'
  | 'categories___taxonomy___types'
  | 'categories___taxonomy___hierarchical'
  | 'categories___taxonomy___rest_base'
  | 'categories___taxonomy____links___collection'
  | 'categories___taxonomy____links___wp_items'
  | 'categories___taxonomy____links___curies'
  | 'categories____links___self'
  | 'categories____links___self___href'
  | 'categories____links___collection'
  | 'categories____links___collection___href'
  | 'categories____links___about'
  | 'categories____links___about___href'
  | 'categories____links___wp_post_type'
  | 'categories____links___wp_post_type___href'
  | 'categories____links___curies'
  | 'categories____links___curies___name'
  | 'categories____links___curies___href'
  | 'categories____links___curies___templated'
  | 'categories___path'
  | '_links___self'
  | '_links___self___href'
  | '_links___collection'
  | '_links___collection___href'
  | '_links___about'
  | '_links___about___href'
  | '_links___author'
  | '_links___author___embeddable'
  | '_links___author___href'
  | '_links___replies'
  | '_links___replies___embeddable'
  | '_links___replies___href'
  | '_links___version_history'
  | '_links___version_history___count'
  | '_links___version_history___href'
  | '_links___predecessor_version'
  | '_links___predecessor_version___wordpress_id'
  | '_links___predecessor_version___href'
  | '_links___wp_attachment'
  | '_links___wp_attachment___href'
  | '_links___wp_term'
  | '_links___wp_term___taxonomy'
  | '_links___wp_term___embeddable'
  | '_links___wp_term___href'
  | '_links___curies'
  | '_links___curies___name'
  | '_links___curies___href'
  | '_links___curies___templated'
  | 'path';

export type Wordpress__PostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  categories?: Maybe<Wordpress__CategoryFilterListInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostFilterInput>;
};

export type Wordpress__PostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PostEdge>;
  nodes: Array<Wordpress__Post>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__PostSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__PostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Site_Metadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
};

export type Wordpress__Site_MetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Site_MetadataEdge>;
  nodes: Array<Wordpress__Site_Metadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Site_MetadataGroupConnection>;
};


export type Wordpress__Site_MetadataConnectionDistinctArgs = {
  field: Wordpress__Site_MetadataFieldsEnum;
};


export type Wordpress__Site_MetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Site_MetadataFieldsEnum;
};

export type Wordpress__Site_MetadataEdge = {
  next?: Maybe<Wordpress__Site_Metadata>;
  node: Wordpress__Site_Metadata;
  previous?: Maybe<Wordpress__Site_Metadata>;
};

export type Wordpress__Site_MetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'description'
  | 'url'
  | 'home';

export type Wordpress__Site_MetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Site_MetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Site_MetadataEdge>;
  nodes: Array<Wordpress__Site_Metadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Site_MetadataSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Site_MetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Media = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  alt_text?: Maybe<Scalars['String']>;
  media_type?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  media_details?: Maybe<Wordpress__Wp_MediaMedia_Details>;
  source_url?: Maybe<Scalars['String']>;
  author?: Maybe<Wordpress__Wp_Users>;
  guid?: Maybe<Wordpress__Wp_Media>;
  localFile?: Maybe<File>;
  _links?: Maybe<Wordpress__Wp_Media_Links>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_MediaDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_MediaModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksReplies>>>;
};

export type Wordpress__Wp_Media_LinksAbout = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksAboutFilterInput>;
};

export type Wordpress__Wp_Media_LinksAuthor = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksAuthorFilterInput>;
};

export type Wordpress__Wp_Media_LinksCollection = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Media_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Media_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Media_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Wp_Media_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Wp_Media_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Wp_Media_LinksRepliesFilterListInput>;
};

export type Wordpress__Wp_Media_LinksReplies = {
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksRepliesFilterInput>;
};

export type Wordpress__Wp_Media_LinksSelf = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksSelfFilterInput>;
};

export type Wordpress__Wp_MediaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_MediaEdge>;
  nodes: Array<Wordpress__Wp_Media>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_MediaGroupConnection>;
};


export type Wordpress__Wp_MediaConnectionDistinctArgs = {
  field: Wordpress__Wp_MediaFieldsEnum;
};


export type Wordpress__Wp_MediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_MediaFieldsEnum;
};

export type Wordpress__Wp_MediaEdge = {
  next?: Maybe<Wordpress__Wp_Media>;
  node: Wordpress__Wp_Media;
  previous?: Maybe<Wordpress__Wp_Media>;
};

export type Wordpress__Wp_MediaFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id'
  | 'date'
  | 'modified'
  | 'slug'
  | 'status'
  | 'type'
  | 'link'
  | 'title'
  | 'comment_status'
  | 'ping_status'
  | 'template'
  | 'description'
  | 'caption'
  | 'alt_text'
  | 'media_type'
  | 'mime_type'
  | 'media_details___width'
  | 'media_details___height'
  | 'media_details___file'
  | 'media_details___image_meta___aperture'
  | 'media_details___image_meta___credit'
  | 'media_details___image_meta___camera'
  | 'media_details___image_meta___caption'
  | 'media_details___image_meta___created_timestamp'
  | 'media_details___image_meta___copyright'
  | 'media_details___image_meta___focal_length'
  | 'media_details___image_meta___iso'
  | 'media_details___image_meta___shutter_speed'
  | 'media_details___image_meta___title'
  | 'media_details___image_meta___orientation'
  | 'source_url'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___wordpress_id'
  | 'author___name'
  | 'author___url'
  | 'author___description'
  | 'author___link'
  | 'author___slug'
  | 'author___avatar_urls___wordpress_24'
  | 'author___avatar_urls___wordpress_48'
  | 'author___avatar_urls___wordpress_96'
  | 'author___authored_wordpress__POST'
  | 'author___authored_wordpress__POST___id'
  | 'author___authored_wordpress__POST___parent___id'
  | 'author___authored_wordpress__POST___parent___children'
  | 'author___authored_wordpress__POST___children'
  | 'author___authored_wordpress__POST___children___id'
  | 'author___authored_wordpress__POST___children___children'
  | 'author___authored_wordpress__POST___internal___content'
  | 'author___authored_wordpress__POST___internal___contentDigest'
  | 'author___authored_wordpress__POST___internal___description'
  | 'author___authored_wordpress__POST___internal___fieldOwners'
  | 'author___authored_wordpress__POST___internal___ignoreType'
  | 'author___authored_wordpress__POST___internal___mediaType'
  | 'author___authored_wordpress__POST___internal___owner'
  | 'author___authored_wordpress__POST___internal___type'
  | 'author___authored_wordpress__POST___wordpress_id'
  | 'author___authored_wordpress__POST___date'
  | 'author___authored_wordpress__POST___guid'
  | 'author___authored_wordpress__POST___modified'
  | 'author___authored_wordpress__POST___slug'
  | 'author___authored_wordpress__POST___status'
  | 'author___authored_wordpress__POST___type'
  | 'author___authored_wordpress__POST___link'
  | 'author___authored_wordpress__POST___title'
  | 'author___authored_wordpress__POST___content'
  | 'author___authored_wordpress__POST___excerpt'
  | 'author___authored_wordpress__POST___comment_status'
  | 'author___authored_wordpress__POST___ping_status'
  | 'author___authored_wordpress__POST___sticky'
  | 'author___authored_wordpress__POST___template'
  | 'author___authored_wordpress__POST___format'
  | 'author___authored_wordpress__POST___author___id'
  | 'author___authored_wordpress__POST___author___children'
  | 'author___authored_wordpress__POST___author___wordpress_id'
  | 'author___authored_wordpress__POST___author___name'
  | 'author___authored_wordpress__POST___author___url'
  | 'author___authored_wordpress__POST___author___description'
  | 'author___authored_wordpress__POST___author___link'
  | 'author___authored_wordpress__POST___author___slug'
  | 'author___authored_wordpress__POST___author___authored_wordpress__POST'
  | 'author___authored_wordpress__POST___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__POST___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__POST___author___path'
  | 'author___authored_wordpress__POST___categories'
  | 'author___authored_wordpress__POST___categories___id'
  | 'author___authored_wordpress__POST___categories___children'
  | 'author___authored_wordpress__POST___categories___wordpress_id'
  | 'author___authored_wordpress__POST___categories___count'
  | 'author___authored_wordpress__POST___categories___description'
  | 'author___authored_wordpress__POST___categories___link'
  | 'author___authored_wordpress__POST___categories___name'
  | 'author___authored_wordpress__POST___categories___slug'
  | 'author___authored_wordpress__POST___categories___wordpress_parent'
  | 'author___authored_wordpress__POST___categories___path'
  | 'author___authored_wordpress__POST____links___self'
  | 'author___authored_wordpress__POST____links___collection'
  | 'author___authored_wordpress__POST____links___about'
  | 'author___authored_wordpress__POST____links___author'
  | 'author___authored_wordpress__POST____links___replies'
  | 'author___authored_wordpress__POST____links___version_history'
  | 'author___authored_wordpress__POST____links___predecessor_version'
  | 'author___authored_wordpress__POST____links___wp_attachment'
  | 'author___authored_wordpress__POST____links___wp_term'
  | 'author___authored_wordpress__POST____links___curies'
  | 'author___authored_wordpress__POST___path'
  | 'author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__PAGE___id'
  | 'author___authored_wordpress__PAGE___parent___id'
  | 'author___authored_wordpress__PAGE___parent___children'
  | 'author___authored_wordpress__PAGE___children'
  | 'author___authored_wordpress__PAGE___children___id'
  | 'author___authored_wordpress__PAGE___children___children'
  | 'author___authored_wordpress__PAGE___internal___content'
  | 'author___authored_wordpress__PAGE___internal___contentDigest'
  | 'author___authored_wordpress__PAGE___internal___description'
  | 'author___authored_wordpress__PAGE___internal___fieldOwners'
  | 'author___authored_wordpress__PAGE___internal___ignoreType'
  | 'author___authored_wordpress__PAGE___internal___mediaType'
  | 'author___authored_wordpress__PAGE___internal___owner'
  | 'author___authored_wordpress__PAGE___internal___type'
  | 'author___authored_wordpress__PAGE___wordpress_id'
  | 'author___authored_wordpress__PAGE___date'
  | 'author___authored_wordpress__PAGE___guid'
  | 'author___authored_wordpress__PAGE___modified'
  | 'author___authored_wordpress__PAGE___slug'
  | 'author___authored_wordpress__PAGE___status'
  | 'author___authored_wordpress__PAGE___type'
  | 'author___authored_wordpress__PAGE___link'
  | 'author___authored_wordpress__PAGE___title'
  | 'author___authored_wordpress__PAGE___content'
  | 'author___authored_wordpress__PAGE___excerpt'
  | 'author___authored_wordpress__PAGE___wordpress_parent'
  | 'author___authored_wordpress__PAGE___menu_order'
  | 'author___authored_wordpress__PAGE___comment_status'
  | 'author___authored_wordpress__PAGE___ping_status'
  | 'author___authored_wordpress__PAGE___template'
  | 'author___authored_wordpress__PAGE___author___id'
  | 'author___authored_wordpress__PAGE___author___children'
  | 'author___authored_wordpress__PAGE___author___wordpress_id'
  | 'author___authored_wordpress__PAGE___author___name'
  | 'author___authored_wordpress__PAGE___author___url'
  | 'author___authored_wordpress__PAGE___author___description'
  | 'author___authored_wordpress__PAGE___author___link'
  | 'author___authored_wordpress__PAGE___author___slug'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__POST'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__PAGE___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__PAGE___author___path'
  | 'author___authored_wordpress__PAGE___parent_element___id'
  | 'author___authored_wordpress__PAGE___parent_element___children'
  | 'author___authored_wordpress__PAGE___parent_element___wordpress_id'
  | 'author___authored_wordpress__PAGE___parent_element___date'
  | 'author___authored_wordpress__PAGE___parent_element___guid'
  | 'author___authored_wordpress__PAGE___parent_element___modified'
  | 'author___authored_wordpress__PAGE___parent_element___slug'
  | 'author___authored_wordpress__PAGE___parent_element___status'
  | 'author___authored_wordpress__PAGE___parent_element___type'
  | 'author___authored_wordpress__PAGE___parent_element___link'
  | 'author___authored_wordpress__PAGE___parent_element___title'
  | 'author___authored_wordpress__PAGE___parent_element___content'
  | 'author___authored_wordpress__PAGE___parent_element___excerpt'
  | 'author___authored_wordpress__PAGE___parent_element___wordpress_parent'
  | 'author___authored_wordpress__PAGE___parent_element___menu_order'
  | 'author___authored_wordpress__PAGE___parent_element___comment_status'
  | 'author___authored_wordpress__PAGE___parent_element___ping_status'
  | 'author___authored_wordpress__PAGE___parent_element___template'
  | 'author___authored_wordpress__PAGE___parent_element___path'
  | 'author___authored_wordpress__PAGE____links___self'
  | 'author___authored_wordpress__PAGE____links___collection'
  | 'author___authored_wordpress__PAGE____links___about'
  | 'author___authored_wordpress__PAGE____links___author'
  | 'author___authored_wordpress__PAGE____links___replies'
  | 'author___authored_wordpress__PAGE____links___version_history'
  | 'author___authored_wordpress__PAGE____links___predecessor_version'
  | 'author___authored_wordpress__PAGE____links___up'
  | 'author___authored_wordpress__PAGE____links___wp_attachment'
  | 'author___authored_wordpress__PAGE____links___curies'
  | 'author___authored_wordpress__PAGE___path'
  | 'author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__wp_media___id'
  | 'author___authored_wordpress__wp_media___parent___id'
  | 'author___authored_wordpress__wp_media___parent___children'
  | 'author___authored_wordpress__wp_media___children'
  | 'author___authored_wordpress__wp_media___children___id'
  | 'author___authored_wordpress__wp_media___children___children'
  | 'author___authored_wordpress__wp_media___internal___content'
  | 'author___authored_wordpress__wp_media___internal___contentDigest'
  | 'author___authored_wordpress__wp_media___internal___description'
  | 'author___authored_wordpress__wp_media___internal___fieldOwners'
  | 'author___authored_wordpress__wp_media___internal___ignoreType'
  | 'author___authored_wordpress__wp_media___internal___mediaType'
  | 'author___authored_wordpress__wp_media___internal___owner'
  | 'author___authored_wordpress__wp_media___internal___type'
  | 'author___authored_wordpress__wp_media___wordpress_id'
  | 'author___authored_wordpress__wp_media___date'
  | 'author___authored_wordpress__wp_media___modified'
  | 'author___authored_wordpress__wp_media___slug'
  | 'author___authored_wordpress__wp_media___status'
  | 'author___authored_wordpress__wp_media___type'
  | 'author___authored_wordpress__wp_media___link'
  | 'author___authored_wordpress__wp_media___title'
  | 'author___authored_wordpress__wp_media___comment_status'
  | 'author___authored_wordpress__wp_media___ping_status'
  | 'author___authored_wordpress__wp_media___template'
  | 'author___authored_wordpress__wp_media___description'
  | 'author___authored_wordpress__wp_media___caption'
  | 'author___authored_wordpress__wp_media___alt_text'
  | 'author___authored_wordpress__wp_media___media_type'
  | 'author___authored_wordpress__wp_media___mime_type'
  | 'author___authored_wordpress__wp_media___media_details___width'
  | 'author___authored_wordpress__wp_media___media_details___height'
  | 'author___authored_wordpress__wp_media___media_details___file'
  | 'author___authored_wordpress__wp_media___source_url'
  | 'author___authored_wordpress__wp_media___author___id'
  | 'author___authored_wordpress__wp_media___author___children'
  | 'author___authored_wordpress__wp_media___author___wordpress_id'
  | 'author___authored_wordpress__wp_media___author___name'
  | 'author___authored_wordpress__wp_media___author___url'
  | 'author___authored_wordpress__wp_media___author___description'
  | 'author___authored_wordpress__wp_media___author___link'
  | 'author___authored_wordpress__wp_media___author___slug'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__POST'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__PAGE'
  | 'author___authored_wordpress__wp_media___author___authored_wordpress__wp_media'
  | 'author___authored_wordpress__wp_media___author___path'
  | 'author___authored_wordpress__wp_media___guid___id'
  | 'author___authored_wordpress__wp_media___guid___children'
  | 'author___authored_wordpress__wp_media___guid___wordpress_id'
  | 'author___authored_wordpress__wp_media___guid___date'
  | 'author___authored_wordpress__wp_media___guid___modified'
  | 'author___authored_wordpress__wp_media___guid___slug'
  | 'author___authored_wordpress__wp_media___guid___status'
  | 'author___authored_wordpress__wp_media___guid___type'
  | 'author___authored_wordpress__wp_media___guid___link'
  | 'author___authored_wordpress__wp_media___guid___title'
  | 'author___authored_wordpress__wp_media___guid___comment_status'
  | 'author___authored_wordpress__wp_media___guid___ping_status'
  | 'author___authored_wordpress__wp_media___guid___template'
  | 'author___authored_wordpress__wp_media___guid___description'
  | 'author___authored_wordpress__wp_media___guid___caption'
  | 'author___authored_wordpress__wp_media___guid___alt_text'
  | 'author___authored_wordpress__wp_media___guid___media_type'
  | 'author___authored_wordpress__wp_media___guid___mime_type'
  | 'author___authored_wordpress__wp_media___guid___source_url'
  | 'author___authored_wordpress__wp_media___guid___path'
  | 'author___authored_wordpress__wp_media___localFile___sourceInstanceName'
  | 'author___authored_wordpress__wp_media___localFile___absolutePath'
  | 'author___authored_wordpress__wp_media___localFile___relativePath'
  | 'author___authored_wordpress__wp_media___localFile___extension'
  | 'author___authored_wordpress__wp_media___localFile___size'
  | 'author___authored_wordpress__wp_media___localFile___prettySize'
  | 'author___authored_wordpress__wp_media___localFile___modifiedTime'
  | 'author___authored_wordpress__wp_media___localFile___accessTime'
  | 'author___authored_wordpress__wp_media___localFile___changeTime'
  | 'author___authored_wordpress__wp_media___localFile___birthTime'
  | 'author___authored_wordpress__wp_media___localFile___root'
  | 'author___authored_wordpress__wp_media___localFile___dir'
  | 'author___authored_wordpress__wp_media___localFile___base'
  | 'author___authored_wordpress__wp_media___localFile___ext'
  | 'author___authored_wordpress__wp_media___localFile___name'
  | 'author___authored_wordpress__wp_media___localFile___relativeDirectory'
  | 'author___authored_wordpress__wp_media___localFile___dev'
  | 'author___authored_wordpress__wp_media___localFile___mode'
  | 'author___authored_wordpress__wp_media___localFile___nlink'
  | 'author___authored_wordpress__wp_media___localFile___uid'
  | 'author___authored_wordpress__wp_media___localFile___gid'
  | 'author___authored_wordpress__wp_media___localFile___rdev'
  | 'author___authored_wordpress__wp_media___localFile___ino'
  | 'author___authored_wordpress__wp_media___localFile___atimeMs'
  | 'author___authored_wordpress__wp_media___localFile___mtimeMs'
  | 'author___authored_wordpress__wp_media___localFile___ctimeMs'
  | 'author___authored_wordpress__wp_media___localFile___atime'
  | 'author___authored_wordpress__wp_media___localFile___mtime'
  | 'author___authored_wordpress__wp_media___localFile___ctime'
  | 'author___authored_wordpress__wp_media___localFile___birthtime'
  | 'author___authored_wordpress__wp_media___localFile___birthtimeMs'
  | 'author___authored_wordpress__wp_media___localFile___blksize'
  | 'author___authored_wordpress__wp_media___localFile___blocks'
  | 'author___authored_wordpress__wp_media___localFile___url'
  | 'author___authored_wordpress__wp_media___localFile___id'
  | 'author___authored_wordpress__wp_media___localFile___children'
  | 'author___authored_wordpress__wp_media____links___self'
  | 'author___authored_wordpress__wp_media____links___collection'
  | 'author___authored_wordpress__wp_media____links___about'
  | 'author___authored_wordpress__wp_media____links___author'
  | 'author___authored_wordpress__wp_media____links___replies'
  | 'author___authored_wordpress__wp_media___path'
  | 'author____links___self'
  | 'author____links___self___href'
  | 'author____links___collection'
  | 'author____links___collection___href'
  | 'author___path'
  | 'guid___id'
  | 'guid___parent___id'
  | 'guid___parent___parent___id'
  | 'guid___parent___parent___children'
  | 'guid___parent___children'
  | 'guid___parent___children___id'
  | 'guid___parent___children___children'
  | 'guid___parent___internal___content'
  | 'guid___parent___internal___contentDigest'
  | 'guid___parent___internal___description'
  | 'guid___parent___internal___fieldOwners'
  | 'guid___parent___internal___ignoreType'
  | 'guid___parent___internal___mediaType'
  | 'guid___parent___internal___owner'
  | 'guid___parent___internal___type'
  | 'guid___children'
  | 'guid___children___id'
  | 'guid___children___parent___id'
  | 'guid___children___parent___children'
  | 'guid___children___children'
  | 'guid___children___children___id'
  | 'guid___children___children___children'
  | 'guid___children___internal___content'
  | 'guid___children___internal___contentDigest'
  | 'guid___children___internal___description'
  | 'guid___children___internal___fieldOwners'
  | 'guid___children___internal___ignoreType'
  | 'guid___children___internal___mediaType'
  | 'guid___children___internal___owner'
  | 'guid___children___internal___type'
  | 'guid___internal___content'
  | 'guid___internal___contentDigest'
  | 'guid___internal___description'
  | 'guid___internal___fieldOwners'
  | 'guid___internal___ignoreType'
  | 'guid___internal___mediaType'
  | 'guid___internal___owner'
  | 'guid___internal___type'
  | 'guid___wordpress_id'
  | 'guid___date'
  | 'guid___modified'
  | 'guid___slug'
  | 'guid___status'
  | 'guid___type'
  | 'guid___link'
  | 'guid___title'
  | 'guid___comment_status'
  | 'guid___ping_status'
  | 'guid___template'
  | 'guid___description'
  | 'guid___caption'
  | 'guid___alt_text'
  | 'guid___media_type'
  | 'guid___mime_type'
  | 'guid___media_details___width'
  | 'guid___media_details___height'
  | 'guid___media_details___file'
  | 'guid___media_details___image_meta___aperture'
  | 'guid___media_details___image_meta___credit'
  | 'guid___media_details___image_meta___camera'
  | 'guid___media_details___image_meta___caption'
  | 'guid___media_details___image_meta___created_timestamp'
  | 'guid___media_details___image_meta___copyright'
  | 'guid___media_details___image_meta___focal_length'
  | 'guid___media_details___image_meta___iso'
  | 'guid___media_details___image_meta___shutter_speed'
  | 'guid___media_details___image_meta___title'
  | 'guid___media_details___image_meta___orientation'
  | 'guid___source_url'
  | 'guid___author___id'
  | 'guid___author___parent___id'
  | 'guid___author___parent___children'
  | 'guid___author___children'
  | 'guid___author___children___id'
  | 'guid___author___children___children'
  | 'guid___author___internal___content'
  | 'guid___author___internal___contentDigest'
  | 'guid___author___internal___description'
  | 'guid___author___internal___fieldOwners'
  | 'guid___author___internal___ignoreType'
  | 'guid___author___internal___mediaType'
  | 'guid___author___internal___owner'
  | 'guid___author___internal___type'
  | 'guid___author___wordpress_id'
  | 'guid___author___name'
  | 'guid___author___url'
  | 'guid___author___description'
  | 'guid___author___link'
  | 'guid___author___slug'
  | 'guid___author___avatar_urls___wordpress_24'
  | 'guid___author___avatar_urls___wordpress_48'
  | 'guid___author___avatar_urls___wordpress_96'
  | 'guid___author___authored_wordpress__POST'
  | 'guid___author___authored_wordpress__POST___id'
  | 'guid___author___authored_wordpress__POST___children'
  | 'guid___author___authored_wordpress__POST___wordpress_id'
  | 'guid___author___authored_wordpress__POST___date'
  | 'guid___author___authored_wordpress__POST___guid'
  | 'guid___author___authored_wordpress__POST___modified'
  | 'guid___author___authored_wordpress__POST___slug'
  | 'guid___author___authored_wordpress__POST___status'
  | 'guid___author___authored_wordpress__POST___type'
  | 'guid___author___authored_wordpress__POST___link'
  | 'guid___author___authored_wordpress__POST___title'
  | 'guid___author___authored_wordpress__POST___content'
  | 'guid___author___authored_wordpress__POST___excerpt'
  | 'guid___author___authored_wordpress__POST___comment_status'
  | 'guid___author___authored_wordpress__POST___ping_status'
  | 'guid___author___authored_wordpress__POST___sticky'
  | 'guid___author___authored_wordpress__POST___template'
  | 'guid___author___authored_wordpress__POST___format'
  | 'guid___author___authored_wordpress__POST___categories'
  | 'guid___author___authored_wordpress__POST___path'
  | 'guid___author___authored_wordpress__PAGE'
  | 'guid___author___authored_wordpress__PAGE___id'
  | 'guid___author___authored_wordpress__PAGE___children'
  | 'guid___author___authored_wordpress__PAGE___wordpress_id'
  | 'guid___author___authored_wordpress__PAGE___date'
  | 'guid___author___authored_wordpress__PAGE___guid'
  | 'guid___author___authored_wordpress__PAGE___modified'
  | 'guid___author___authored_wordpress__PAGE___slug'
  | 'guid___author___authored_wordpress__PAGE___status'
  | 'guid___author___authored_wordpress__PAGE___type'
  | 'guid___author___authored_wordpress__PAGE___link'
  | 'guid___author___authored_wordpress__PAGE___title'
  | 'guid___author___authored_wordpress__PAGE___content'
  | 'guid___author___authored_wordpress__PAGE___excerpt'
  | 'guid___author___authored_wordpress__PAGE___wordpress_parent'
  | 'guid___author___authored_wordpress__PAGE___menu_order'
  | 'guid___author___authored_wordpress__PAGE___comment_status'
  | 'guid___author___authored_wordpress__PAGE___ping_status'
  | 'guid___author___authored_wordpress__PAGE___template'
  | 'guid___author___authored_wordpress__PAGE___path'
  | 'guid___author___authored_wordpress__wp_media'
  | 'guid___author___authored_wordpress__wp_media___id'
  | 'guid___author___authored_wordpress__wp_media___children'
  | 'guid___author___authored_wordpress__wp_media___wordpress_id'
  | 'guid___author___authored_wordpress__wp_media___date'
  | 'guid___author___authored_wordpress__wp_media___modified'
  | 'guid___author___authored_wordpress__wp_media___slug'
  | 'guid___author___authored_wordpress__wp_media___status'
  | 'guid___author___authored_wordpress__wp_media___type'
  | 'guid___author___authored_wordpress__wp_media___link'
  | 'guid___author___authored_wordpress__wp_media___title'
  | 'guid___author___authored_wordpress__wp_media___comment_status'
  | 'guid___author___authored_wordpress__wp_media___ping_status'
  | 'guid___author___authored_wordpress__wp_media___template'
  | 'guid___author___authored_wordpress__wp_media___description'
  | 'guid___author___authored_wordpress__wp_media___caption'
  | 'guid___author___authored_wordpress__wp_media___alt_text'
  | 'guid___author___authored_wordpress__wp_media___media_type'
  | 'guid___author___authored_wordpress__wp_media___mime_type'
  | 'guid___author___authored_wordpress__wp_media___source_url'
  | 'guid___author___authored_wordpress__wp_media___path'
  | 'guid___author____links___self'
  | 'guid___author____links___collection'
  | 'guid___author___path'
  | 'guid___guid___id'
  | 'guid___guid___parent___id'
  | 'guid___guid___parent___children'
  | 'guid___guid___children'
  | 'guid___guid___children___id'
  | 'guid___guid___children___children'
  | 'guid___guid___internal___content'
  | 'guid___guid___internal___contentDigest'
  | 'guid___guid___internal___description'
  | 'guid___guid___internal___fieldOwners'
  | 'guid___guid___internal___ignoreType'
  | 'guid___guid___internal___mediaType'
  | 'guid___guid___internal___owner'
  | 'guid___guid___internal___type'
  | 'guid___guid___wordpress_id'
  | 'guid___guid___date'
  | 'guid___guid___modified'
  | 'guid___guid___slug'
  | 'guid___guid___status'
  | 'guid___guid___type'
  | 'guid___guid___link'
  | 'guid___guid___title'
  | 'guid___guid___comment_status'
  | 'guid___guid___ping_status'
  | 'guid___guid___template'
  | 'guid___guid___description'
  | 'guid___guid___caption'
  | 'guid___guid___alt_text'
  | 'guid___guid___media_type'
  | 'guid___guid___mime_type'
  | 'guid___guid___media_details___width'
  | 'guid___guid___media_details___height'
  | 'guid___guid___media_details___file'
  | 'guid___guid___source_url'
  | 'guid___guid___author___id'
  | 'guid___guid___author___children'
  | 'guid___guid___author___wordpress_id'
  | 'guid___guid___author___name'
  | 'guid___guid___author___url'
  | 'guid___guid___author___description'
  | 'guid___guid___author___link'
  | 'guid___guid___author___slug'
  | 'guid___guid___author___authored_wordpress__POST'
  | 'guid___guid___author___authored_wordpress__PAGE'
  | 'guid___guid___author___authored_wordpress__wp_media'
  | 'guid___guid___author___path'
  | 'guid___guid___guid___id'
  | 'guid___guid___guid___children'
  | 'guid___guid___guid___wordpress_id'
  | 'guid___guid___guid___date'
  | 'guid___guid___guid___modified'
  | 'guid___guid___guid___slug'
  | 'guid___guid___guid___status'
  | 'guid___guid___guid___type'
  | 'guid___guid___guid___link'
  | 'guid___guid___guid___title'
  | 'guid___guid___guid___comment_status'
  | 'guid___guid___guid___ping_status'
  | 'guid___guid___guid___template'
  | 'guid___guid___guid___description'
  | 'guid___guid___guid___caption'
  | 'guid___guid___guid___alt_text'
  | 'guid___guid___guid___media_type'
  | 'guid___guid___guid___mime_type'
  | 'guid___guid___guid___source_url'
  | 'guid___guid___guid___path'
  | 'guid___guid___localFile___sourceInstanceName'
  | 'guid___guid___localFile___absolutePath'
  | 'guid___guid___localFile___relativePath'
  | 'guid___guid___localFile___extension'
  | 'guid___guid___localFile___size'
  | 'guid___guid___localFile___prettySize'
  | 'guid___guid___localFile___modifiedTime'
  | 'guid___guid___localFile___accessTime'
  | 'guid___guid___localFile___changeTime'
  | 'guid___guid___localFile___birthTime'
  | 'guid___guid___localFile___root'
  | 'guid___guid___localFile___dir'
  | 'guid___guid___localFile___base'
  | 'guid___guid___localFile___ext'
  | 'guid___guid___localFile___name'
  | 'guid___guid___localFile___relativeDirectory'
  | 'guid___guid___localFile___dev'
  | 'guid___guid___localFile___mode'
  | 'guid___guid___localFile___nlink'
  | 'guid___guid___localFile___uid'
  | 'guid___guid___localFile___gid'
  | 'guid___guid___localFile___rdev'
  | 'guid___guid___localFile___ino'
  | 'guid___guid___localFile___atimeMs'
  | 'guid___guid___localFile___mtimeMs'
  | 'guid___guid___localFile___ctimeMs'
  | 'guid___guid___localFile___atime'
  | 'guid___guid___localFile___mtime'
  | 'guid___guid___localFile___ctime'
  | 'guid___guid___localFile___birthtime'
  | 'guid___guid___localFile___birthtimeMs'
  | 'guid___guid___localFile___blksize'
  | 'guid___guid___localFile___blocks'
  | 'guid___guid___localFile___url'
  | 'guid___guid___localFile___id'
  | 'guid___guid___localFile___children'
  | 'guid___guid____links___self'
  | 'guid___guid____links___collection'
  | 'guid___guid____links___about'
  | 'guid___guid____links___author'
  | 'guid___guid____links___replies'
  | 'guid___guid___path'
  | 'guid___localFile___sourceInstanceName'
  | 'guid___localFile___absolutePath'
  | 'guid___localFile___relativePath'
  | 'guid___localFile___extension'
  | 'guid___localFile___size'
  | 'guid___localFile___prettySize'
  | 'guid___localFile___modifiedTime'
  | 'guid___localFile___accessTime'
  | 'guid___localFile___changeTime'
  | 'guid___localFile___birthTime'
  | 'guid___localFile___root'
  | 'guid___localFile___dir'
  | 'guid___localFile___base'
  | 'guid___localFile___ext'
  | 'guid___localFile___name'
  | 'guid___localFile___relativeDirectory'
  | 'guid___localFile___dev'
  | 'guid___localFile___mode'
  | 'guid___localFile___nlink'
  | 'guid___localFile___uid'
  | 'guid___localFile___gid'
  | 'guid___localFile___rdev'
  | 'guid___localFile___ino'
  | 'guid___localFile___atimeMs'
  | 'guid___localFile___mtimeMs'
  | 'guid___localFile___ctimeMs'
  | 'guid___localFile___atime'
  | 'guid___localFile___mtime'
  | 'guid___localFile___ctime'
  | 'guid___localFile___birthtime'
  | 'guid___localFile___birthtimeMs'
  | 'guid___localFile___blksize'
  | 'guid___localFile___blocks'
  | 'guid___localFile___url'
  | 'guid___localFile___id'
  | 'guid___localFile___parent___id'
  | 'guid___localFile___parent___children'
  | 'guid___localFile___children'
  | 'guid___localFile___children___id'
  | 'guid___localFile___children___children'
  | 'guid___localFile___internal___content'
  | 'guid___localFile___internal___contentDigest'
  | 'guid___localFile___internal___description'
  | 'guid___localFile___internal___fieldOwners'
  | 'guid___localFile___internal___ignoreType'
  | 'guid___localFile___internal___mediaType'
  | 'guid___localFile___internal___owner'
  | 'guid___localFile___internal___type'
  | 'guid____links___self'
  | 'guid____links___self___href'
  | 'guid____links___collection'
  | 'guid____links___collection___href'
  | 'guid____links___about'
  | 'guid____links___about___href'
  | 'guid____links___author'
  | 'guid____links___author___embeddable'
  | 'guid____links___author___href'
  | 'guid____links___replies'
  | 'guid____links___replies___embeddable'
  | 'guid____links___replies___href'
  | 'guid___path'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | '_links___self'
  | '_links___self___href'
  | '_links___collection'
  | '_links___collection___href'
  | '_links___about'
  | '_links___about___href'
  | '_links___author'
  | '_links___author___embeddable'
  | '_links___author___href'
  | '_links___replies'
  | '_links___replies___embeddable'
  | '_links___replies___href'
  | 'path';

export type Wordpress__Wp_MediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  alt_text?: Maybe<StringQueryOperatorInput>;
  media_type?: Maybe<StringQueryOperatorInput>;
  mime_type?: Maybe<StringQueryOperatorInput>;
  media_details?: Maybe<Wordpress__Wp_MediaMedia_DetailsFilterInput>;
  source_url?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  guid?: Maybe<Wordpress__Wp_MediaFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  _links?: Maybe<Wordpress__Wp_Media_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_MediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_MediaFilterInput>;
};

export type Wordpress__Wp_MediaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_MediaEdge>;
  nodes: Array<Wordpress__Wp_Media>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_MediaMedia_Details = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  file?: Maybe<Scalars['String']>;
  image_meta?: Maybe<Wordpress__Wp_MediaMedia_DetailsImage_Meta>;
};

export type Wordpress__Wp_MediaMedia_DetailsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  file?: Maybe<StringQueryOperatorInput>;
  image_meta?: Maybe<Wordpress__Wp_MediaMedia_DetailsImage_MetaFilterInput>;
};

export type Wordpress__Wp_MediaMedia_DetailsImage_Meta = {
  aperture?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['String']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_timestamp?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  focal_length?: Maybe<Scalars['String']>;
  iso?: Maybe<Scalars['String']>;
  shutter_speed?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  orientation?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_MediaMedia_DetailsImage_MetaFilterInput = {
  aperture?: Maybe<StringQueryOperatorInput>;
  credit?: Maybe<StringQueryOperatorInput>;
  camera?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  created_timestamp?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  focal_length?: Maybe<StringQueryOperatorInput>;
  iso?: Maybe<StringQueryOperatorInput>;
  shutter_speed?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  orientation?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_MediaSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_MediaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Taxonomies = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  rest_base?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_Links>;
};

export type Wordpress__Wp_Taxonomies_Links = {
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksCollection>>>;
  wp_items?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksWp_Items>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksCuries>>>;
};

export type Wordpress__Wp_Taxonomies_LinksCollection = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Taxonomies_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCuries = {
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Wp_Taxonomies_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksCuriesFilterInput>;
};

export type Wordpress__Wp_Taxonomies_LinksFilterInput = {
  collection?: Maybe<Wordpress__Wp_Taxonomies_LinksCollectionFilterListInput>;
  wp_items?: Maybe<Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterListInput>;
  curies?: Maybe<Wordpress__Wp_Taxonomies_LinksCuriesFilterListInput>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_Items = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterInput>;
};

export type Wordpress__Wp_TaxonomiesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TaxonomiesEdge>;
  nodes: Array<Wordpress__Wp_Taxonomies>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_TaxonomiesGroupConnection>;
};


export type Wordpress__Wp_TaxonomiesConnectionDistinctArgs = {
  field: Wordpress__Wp_TaxonomiesFieldsEnum;
};


export type Wordpress__Wp_TaxonomiesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_TaxonomiesFieldsEnum;
};

export type Wordpress__Wp_TaxonomiesEdge = {
  next?: Maybe<Wordpress__Wp_Taxonomies>;
  node: Wordpress__Wp_Taxonomies;
  previous?: Maybe<Wordpress__Wp_Taxonomies>;
};

export type Wordpress__Wp_TaxonomiesFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id'
  | 'name'
  | 'slug'
  | 'description'
  | 'types'
  | 'hierarchical'
  | 'rest_base'
  | '_links___collection'
  | '_links___collection___href'
  | '_links___wp_items'
  | '_links___wp_items___href'
  | '_links___curies'
  | '_links___curies___name'
  | '_links___curies___href'
  | '_links___curies___templated';

export type Wordpress__Wp_TaxonomiesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_LinksFilterInput>;
};

export type Wordpress__Wp_TaxonomiesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TaxonomiesEdge>;
  nodes: Array<Wordpress__Wp_Taxonomies>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_TaxonomiesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_TaxonomiesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Users = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_Urls>;
  all_authored_entities?: Maybe<Array<Maybe<Wordpress__PagEwordpress__PosTwordpress__Wp_MediaUnion>>>;
  authored_wordpress__POST?: Maybe<Array<Maybe<Wordpress__Post>>>;
  authored_wordpress__PAGE?: Maybe<Array<Maybe<Wordpress__Page>>>;
  authored_wordpress__wp_media?: Maybe<Array<Maybe<Wordpress__Wp_Media>>>;
  _links?: Maybe<Wordpress__Wp_Users_Links>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Users_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Users_LinksCollection>>>;
};

export type Wordpress__Wp_Users_LinksCollection = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Users_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Users_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Users_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Users_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Users_LinksCollectionFilterListInput>;
};

export type Wordpress__Wp_Users_LinksSelf = {
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Users_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Users_LinksSelfFilterInput>;
};

export type Wordpress__Wp_UsersAvatar_Urls = {
  wordpress_24?: Maybe<Scalars['String']>;
  wordpress_48?: Maybe<Scalars['String']>;
  wordpress_96?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_UsersAvatar_UrlsFilterInput = {
  wordpress_24?: Maybe<StringQueryOperatorInput>;
  wordpress_48?: Maybe<StringQueryOperatorInput>;
  wordpress_96?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_UsersConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_UsersEdge>;
  nodes: Array<Wordpress__Wp_Users>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_UsersGroupConnection>;
};


export type Wordpress__Wp_UsersConnectionDistinctArgs = {
  field: Wordpress__Wp_UsersFieldsEnum;
};


export type Wordpress__Wp_UsersConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_UsersFieldsEnum;
};

export type Wordpress__Wp_UsersEdge = {
  next?: Maybe<Wordpress__Wp_Users>;
  node: Wordpress__Wp_Users;
  previous?: Maybe<Wordpress__Wp_Users>;
};

export type Wordpress__Wp_UsersFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'wordpress_id'
  | 'name'
  | 'url'
  | 'description'
  | 'link'
  | 'slug'
  | 'avatar_urls___wordpress_24'
  | 'avatar_urls___wordpress_48'
  | 'avatar_urls___wordpress_96'
  | 'authored_wordpress__POST'
  | 'authored_wordpress__POST___id'
  | 'authored_wordpress__POST___parent___id'
  | 'authored_wordpress__POST___parent___parent___id'
  | 'authored_wordpress__POST___parent___parent___children'
  | 'authored_wordpress__POST___parent___children'
  | 'authored_wordpress__POST___parent___children___id'
  | 'authored_wordpress__POST___parent___children___children'
  | 'authored_wordpress__POST___parent___internal___content'
  | 'authored_wordpress__POST___parent___internal___contentDigest'
  | 'authored_wordpress__POST___parent___internal___description'
  | 'authored_wordpress__POST___parent___internal___fieldOwners'
  | 'authored_wordpress__POST___parent___internal___ignoreType'
  | 'authored_wordpress__POST___parent___internal___mediaType'
  | 'authored_wordpress__POST___parent___internal___owner'
  | 'authored_wordpress__POST___parent___internal___type'
  | 'authored_wordpress__POST___children'
  | 'authored_wordpress__POST___children___id'
  | 'authored_wordpress__POST___children___parent___id'
  | 'authored_wordpress__POST___children___parent___children'
  | 'authored_wordpress__POST___children___children'
  | 'authored_wordpress__POST___children___children___id'
  | 'authored_wordpress__POST___children___children___children'
  | 'authored_wordpress__POST___children___internal___content'
  | 'authored_wordpress__POST___children___internal___contentDigest'
  | 'authored_wordpress__POST___children___internal___description'
  | 'authored_wordpress__POST___children___internal___fieldOwners'
  | 'authored_wordpress__POST___children___internal___ignoreType'
  | 'authored_wordpress__POST___children___internal___mediaType'
  | 'authored_wordpress__POST___children___internal___owner'
  | 'authored_wordpress__POST___children___internal___type'
  | 'authored_wordpress__POST___internal___content'
  | 'authored_wordpress__POST___internal___contentDigest'
  | 'authored_wordpress__POST___internal___description'
  | 'authored_wordpress__POST___internal___fieldOwners'
  | 'authored_wordpress__POST___internal___ignoreType'
  | 'authored_wordpress__POST___internal___mediaType'
  | 'authored_wordpress__POST___internal___owner'
  | 'authored_wordpress__POST___internal___type'
  | 'authored_wordpress__POST___wordpress_id'
  | 'authored_wordpress__POST___date'
  | 'authored_wordpress__POST___guid'
  | 'authored_wordpress__POST___modified'
  | 'authored_wordpress__POST___slug'
  | 'authored_wordpress__POST___status'
  | 'authored_wordpress__POST___type'
  | 'authored_wordpress__POST___link'
  | 'authored_wordpress__POST___title'
  | 'authored_wordpress__POST___content'
  | 'authored_wordpress__POST___excerpt'
  | 'authored_wordpress__POST___comment_status'
  | 'authored_wordpress__POST___ping_status'
  | 'authored_wordpress__POST___sticky'
  | 'authored_wordpress__POST___template'
  | 'authored_wordpress__POST___format'
  | 'authored_wordpress__POST___author___id'
  | 'authored_wordpress__POST___author___parent___id'
  | 'authored_wordpress__POST___author___parent___children'
  | 'authored_wordpress__POST___author___children'
  | 'authored_wordpress__POST___author___children___id'
  | 'authored_wordpress__POST___author___children___children'
  | 'authored_wordpress__POST___author___internal___content'
  | 'authored_wordpress__POST___author___internal___contentDigest'
  | 'authored_wordpress__POST___author___internal___description'
  | 'authored_wordpress__POST___author___internal___fieldOwners'
  | 'authored_wordpress__POST___author___internal___ignoreType'
  | 'authored_wordpress__POST___author___internal___mediaType'
  | 'authored_wordpress__POST___author___internal___owner'
  | 'authored_wordpress__POST___author___internal___type'
  | 'authored_wordpress__POST___author___wordpress_id'
  | 'authored_wordpress__POST___author___name'
  | 'authored_wordpress__POST___author___url'
  | 'authored_wordpress__POST___author___description'
  | 'authored_wordpress__POST___author___link'
  | 'authored_wordpress__POST___author___slug'
  | 'authored_wordpress__POST___author___avatar_urls___wordpress_24'
  | 'authored_wordpress__POST___author___avatar_urls___wordpress_48'
  | 'authored_wordpress__POST___author___avatar_urls___wordpress_96'
  | 'authored_wordpress__POST___author___authored_wordpress__POST'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___id'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___children'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___wordpress_id'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___date'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___guid'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___modified'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___slug'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___status'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___type'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___link'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___title'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___content'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___excerpt'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___comment_status'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___ping_status'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___sticky'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___template'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___format'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___categories'
  | 'authored_wordpress__POST___author___authored_wordpress__POST___path'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___id'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___children'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___wordpress_id'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___date'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___guid'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___modified'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___slug'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___status'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___type'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___link'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___title'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___content'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___excerpt'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___wordpress_parent'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___menu_order'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___comment_status'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___ping_status'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___template'
  | 'authored_wordpress__POST___author___authored_wordpress__PAGE___path'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___id'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___children'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___wordpress_id'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___date'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___modified'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___slug'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___status'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___type'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___link'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___title'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___comment_status'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___ping_status'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___template'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___description'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___caption'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___alt_text'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___media_type'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___mime_type'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___source_url'
  | 'authored_wordpress__POST___author___authored_wordpress__wp_media___path'
  | 'authored_wordpress__POST___author____links___self'
  | 'authored_wordpress__POST___author____links___collection'
  | 'authored_wordpress__POST___author___path'
  | 'authored_wordpress__POST___categories'
  | 'authored_wordpress__POST___categories___id'
  | 'authored_wordpress__POST___categories___parent___id'
  | 'authored_wordpress__POST___categories___parent___children'
  | 'authored_wordpress__POST___categories___children'
  | 'authored_wordpress__POST___categories___children___id'
  | 'authored_wordpress__POST___categories___children___children'
  | 'authored_wordpress__POST___categories___internal___content'
  | 'authored_wordpress__POST___categories___internal___contentDigest'
  | 'authored_wordpress__POST___categories___internal___description'
  | 'authored_wordpress__POST___categories___internal___fieldOwners'
  | 'authored_wordpress__POST___categories___internal___ignoreType'
  | 'authored_wordpress__POST___categories___internal___mediaType'
  | 'authored_wordpress__POST___categories___internal___owner'
  | 'authored_wordpress__POST___categories___internal___type'
  | 'authored_wordpress__POST___categories___wordpress_id'
  | 'authored_wordpress__POST___categories___count'
  | 'authored_wordpress__POST___categories___description'
  | 'authored_wordpress__POST___categories___link'
  | 'authored_wordpress__POST___categories___name'
  | 'authored_wordpress__POST___categories___slug'
  | 'authored_wordpress__POST___categories___wordpress_parent'
  | 'authored_wordpress__POST___categories___taxonomy___id'
  | 'authored_wordpress__POST___categories___taxonomy___children'
  | 'authored_wordpress__POST___categories___taxonomy___wordpress_id'
  | 'authored_wordpress__POST___categories___taxonomy___name'
  | 'authored_wordpress__POST___categories___taxonomy___slug'
  | 'authored_wordpress__POST___categories___taxonomy___description'
  | 'authored_wordpress__POST___categories___taxonomy___types'
  | 'authored_wordpress__POST___categories___taxonomy___hierarchical'
  | 'authored_wordpress__POST___categories___taxonomy___rest_base'
  | 'authored_wordpress__POST___categories____links___self'
  | 'authored_wordpress__POST___categories____links___collection'
  | 'authored_wordpress__POST___categories____links___about'
  | 'authored_wordpress__POST___categories____links___wp_post_type'
  | 'authored_wordpress__POST___categories____links___curies'
  | 'authored_wordpress__POST___categories___path'
  | 'authored_wordpress__POST____links___self'
  | 'authored_wordpress__POST____links___self___href'
  | 'authored_wordpress__POST____links___collection'
  | 'authored_wordpress__POST____links___collection___href'
  | 'authored_wordpress__POST____links___about'
  | 'authored_wordpress__POST____links___about___href'
  | 'authored_wordpress__POST____links___author'
  | 'authored_wordpress__POST____links___author___embeddable'
  | 'authored_wordpress__POST____links___author___href'
  | 'authored_wordpress__POST____links___replies'
  | 'authored_wordpress__POST____links___replies___embeddable'
  | 'authored_wordpress__POST____links___replies___href'
  | 'authored_wordpress__POST____links___version_history'
  | 'authored_wordpress__POST____links___version_history___count'
  | 'authored_wordpress__POST____links___version_history___href'
  | 'authored_wordpress__POST____links___predecessor_version'
  | 'authored_wordpress__POST____links___predecessor_version___wordpress_id'
  | 'authored_wordpress__POST____links___predecessor_version___href'
  | 'authored_wordpress__POST____links___wp_attachment'
  | 'authored_wordpress__POST____links___wp_attachment___href'
  | 'authored_wordpress__POST____links___wp_term'
  | 'authored_wordpress__POST____links___wp_term___taxonomy'
  | 'authored_wordpress__POST____links___wp_term___embeddable'
  | 'authored_wordpress__POST____links___wp_term___href'
  | 'authored_wordpress__POST____links___curies'
  | 'authored_wordpress__POST____links___curies___name'
  | 'authored_wordpress__POST____links___curies___href'
  | 'authored_wordpress__POST____links___curies___templated'
  | 'authored_wordpress__POST___path'
  | 'authored_wordpress__PAGE'
  | 'authored_wordpress__PAGE___id'
  | 'authored_wordpress__PAGE___parent___id'
  | 'authored_wordpress__PAGE___parent___parent___id'
  | 'authored_wordpress__PAGE___parent___parent___children'
  | 'authored_wordpress__PAGE___parent___children'
  | 'authored_wordpress__PAGE___parent___children___id'
  | 'authored_wordpress__PAGE___parent___children___children'
  | 'authored_wordpress__PAGE___parent___internal___content'
  | 'authored_wordpress__PAGE___parent___internal___contentDigest'
  | 'authored_wordpress__PAGE___parent___internal___description'
  | 'authored_wordpress__PAGE___parent___internal___fieldOwners'
  | 'authored_wordpress__PAGE___parent___internal___ignoreType'
  | 'authored_wordpress__PAGE___parent___internal___mediaType'
  | 'authored_wordpress__PAGE___parent___internal___owner'
  | 'authored_wordpress__PAGE___parent___internal___type'
  | 'authored_wordpress__PAGE___children'
  | 'authored_wordpress__PAGE___children___id'
  | 'authored_wordpress__PAGE___children___parent___id'
  | 'authored_wordpress__PAGE___children___parent___children'
  | 'authored_wordpress__PAGE___children___children'
  | 'authored_wordpress__PAGE___children___children___id'
  | 'authored_wordpress__PAGE___children___children___children'
  | 'authored_wordpress__PAGE___children___internal___content'
  | 'authored_wordpress__PAGE___children___internal___contentDigest'
  | 'authored_wordpress__PAGE___children___internal___description'
  | 'authored_wordpress__PAGE___children___internal___fieldOwners'
  | 'authored_wordpress__PAGE___children___internal___ignoreType'
  | 'authored_wordpress__PAGE___children___internal___mediaType'
  | 'authored_wordpress__PAGE___children___internal___owner'
  | 'authored_wordpress__PAGE___children___internal___type'
  | 'authored_wordpress__PAGE___internal___content'
  | 'authored_wordpress__PAGE___internal___contentDigest'
  | 'authored_wordpress__PAGE___internal___description'
  | 'authored_wordpress__PAGE___internal___fieldOwners'
  | 'authored_wordpress__PAGE___internal___ignoreType'
  | 'authored_wordpress__PAGE___internal___mediaType'
  | 'authored_wordpress__PAGE___internal___owner'
  | 'authored_wordpress__PAGE___internal___type'
  | 'authored_wordpress__PAGE___wordpress_id'
  | 'authored_wordpress__PAGE___date'
  | 'authored_wordpress__PAGE___guid'
  | 'authored_wordpress__PAGE___modified'
  | 'authored_wordpress__PAGE___slug'
  | 'authored_wordpress__PAGE___status'
  | 'authored_wordpress__PAGE___type'
  | 'authored_wordpress__PAGE___link'
  | 'authored_wordpress__PAGE___title'
  | 'authored_wordpress__PAGE___content'
  | 'authored_wordpress__PAGE___excerpt'
  | 'authored_wordpress__PAGE___wordpress_parent'
  | 'authored_wordpress__PAGE___menu_order'
  | 'authored_wordpress__PAGE___comment_status'
  | 'authored_wordpress__PAGE___ping_status'
  | 'authored_wordpress__PAGE___template'
  | 'authored_wordpress__PAGE___author___id'
  | 'authored_wordpress__PAGE___author___parent___id'
  | 'authored_wordpress__PAGE___author___parent___children'
  | 'authored_wordpress__PAGE___author___children'
  | 'authored_wordpress__PAGE___author___children___id'
  | 'authored_wordpress__PAGE___author___children___children'
  | 'authored_wordpress__PAGE___author___internal___content'
  | 'authored_wordpress__PAGE___author___internal___contentDigest'
  | 'authored_wordpress__PAGE___author___internal___description'
  | 'authored_wordpress__PAGE___author___internal___fieldOwners'
  | 'authored_wordpress__PAGE___author___internal___ignoreType'
  | 'authored_wordpress__PAGE___author___internal___mediaType'
  | 'authored_wordpress__PAGE___author___internal___owner'
  | 'authored_wordpress__PAGE___author___internal___type'
  | 'authored_wordpress__PAGE___author___wordpress_id'
  | 'authored_wordpress__PAGE___author___name'
  | 'authored_wordpress__PAGE___author___url'
  | 'authored_wordpress__PAGE___author___description'
  | 'authored_wordpress__PAGE___author___link'
  | 'authored_wordpress__PAGE___author___slug'
  | 'authored_wordpress__PAGE___author___avatar_urls___wordpress_24'
  | 'authored_wordpress__PAGE___author___avatar_urls___wordpress_48'
  | 'authored_wordpress__PAGE___author___avatar_urls___wordpress_96'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___id'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___children'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___wordpress_id'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___date'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___guid'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___modified'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___slug'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___type'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___link'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___title'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___content'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___excerpt'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___comment_status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___ping_status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___sticky'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___template'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___format'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___categories'
  | 'authored_wordpress__PAGE___author___authored_wordpress__POST___path'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___id'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___children'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___wordpress_id'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___date'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___guid'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___modified'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___slug'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___type'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___link'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___title'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___content'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___excerpt'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___wordpress_parent'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___menu_order'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___comment_status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___ping_status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___template'
  | 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___path'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___id'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___children'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___wordpress_id'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___date'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___modified'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___slug'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___type'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___link'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___title'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___comment_status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___ping_status'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___template'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___description'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___caption'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___alt_text'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___media_type'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___mime_type'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___source_url'
  | 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___path'
  | 'authored_wordpress__PAGE___author____links___self'
  | 'authored_wordpress__PAGE___author____links___collection'
  | 'authored_wordpress__PAGE___author___path'
  | 'authored_wordpress__PAGE___parent_element___id'
  | 'authored_wordpress__PAGE___parent_element___parent___id'
  | 'authored_wordpress__PAGE___parent_element___parent___children'
  | 'authored_wordpress__PAGE___parent_element___children'
  | 'authored_wordpress__PAGE___parent_element___children___id'
  | 'authored_wordpress__PAGE___parent_element___children___children'
  | 'authored_wordpress__PAGE___parent_element___internal___content'
  | 'authored_wordpress__PAGE___parent_element___internal___contentDigest'
  | 'authored_wordpress__PAGE___parent_element___internal___description'
  | 'authored_wordpress__PAGE___parent_element___internal___fieldOwners'
  | 'authored_wordpress__PAGE___parent_element___internal___ignoreType'
  | 'authored_wordpress__PAGE___parent_element___internal___mediaType'
  | 'authored_wordpress__PAGE___parent_element___internal___owner'
  | 'authored_wordpress__PAGE___parent_element___internal___type'
  | 'authored_wordpress__PAGE___parent_element___wordpress_id'
  | 'authored_wordpress__PAGE___parent_element___date'
  | 'authored_wordpress__PAGE___parent_element___guid'
  | 'authored_wordpress__PAGE___parent_element___modified'
  | 'authored_wordpress__PAGE___parent_element___slug'
  | 'authored_wordpress__PAGE___parent_element___status'
  | 'authored_wordpress__PAGE___parent_element___type'
  | 'authored_wordpress__PAGE___parent_element___link'
  | 'authored_wordpress__PAGE___parent_element___title'
  | 'authored_wordpress__PAGE___parent_element___content'
  | 'authored_wordpress__PAGE___parent_element___excerpt'
  | 'authored_wordpress__PAGE___parent_element___wordpress_parent'
  | 'authored_wordpress__PAGE___parent_element___menu_order'
  | 'authored_wordpress__PAGE___parent_element___comment_status'
  | 'authored_wordpress__PAGE___parent_element___ping_status'
  | 'authored_wordpress__PAGE___parent_element___template'
  | 'authored_wordpress__PAGE___parent_element___author___id'
  | 'authored_wordpress__PAGE___parent_element___author___children'
  | 'authored_wordpress__PAGE___parent_element___author___wordpress_id'
  | 'authored_wordpress__PAGE___parent_element___author___name'
  | 'authored_wordpress__PAGE___parent_element___author___url'
  | 'authored_wordpress__PAGE___parent_element___author___description'
  | 'authored_wordpress__PAGE___parent_element___author___link'
  | 'authored_wordpress__PAGE___parent_element___author___slug'
  | 'authored_wordpress__PAGE___parent_element___author___authored_wordpress__POST'
  | 'authored_wordpress__PAGE___parent_element___author___authored_wordpress__PAGE'
  | 'authored_wordpress__PAGE___parent_element___author___authored_wordpress__wp_media'
  | 'authored_wordpress__PAGE___parent_element___author___path'
  | 'authored_wordpress__PAGE___parent_element___parent_element___id'
  | 'authored_wordpress__PAGE___parent_element___parent_element___children'
  | 'authored_wordpress__PAGE___parent_element___parent_element___wordpress_id'
  | 'authored_wordpress__PAGE___parent_element___parent_element___date'
  | 'authored_wordpress__PAGE___parent_element___parent_element___guid'
  | 'authored_wordpress__PAGE___parent_element___parent_element___modified'
  | 'authored_wordpress__PAGE___parent_element___parent_element___slug'
  | 'authored_wordpress__PAGE___parent_element___parent_element___status'
  | 'authored_wordpress__PAGE___parent_element___parent_element___type'
  | 'authored_wordpress__PAGE___parent_element___parent_element___link'
  | 'authored_wordpress__PAGE___parent_element___parent_element___title'
  | 'authored_wordpress__PAGE___parent_element___parent_element___content'
  | 'authored_wordpress__PAGE___parent_element___parent_element___excerpt'
  | 'authored_wordpress__PAGE___parent_element___parent_element___wordpress_parent'
  | 'authored_wordpress__PAGE___parent_element___parent_element___menu_order'
  | 'authored_wordpress__PAGE___parent_element___parent_element___comment_status'
  | 'authored_wordpress__PAGE___parent_element___parent_element___ping_status'
  | 'authored_wordpress__PAGE___parent_element___parent_element___template'
  | 'authored_wordpress__PAGE___parent_element___parent_element___path'
  | 'authored_wordpress__PAGE___parent_element____links___self'
  | 'authored_wordpress__PAGE___parent_element____links___collection'
  | 'authored_wordpress__PAGE___parent_element____links___about'
  | 'authored_wordpress__PAGE___parent_element____links___author'
  | 'authored_wordpress__PAGE___parent_element____links___replies'
  | 'authored_wordpress__PAGE___parent_element____links___version_history'
  | 'authored_wordpress__PAGE___parent_element____links___predecessor_version'
  | 'authored_wordpress__PAGE___parent_element____links___up'
  | 'authored_wordpress__PAGE___parent_element____links___wp_attachment'
  | 'authored_wordpress__PAGE___parent_element____links___curies'
  | 'authored_wordpress__PAGE___parent_element___path'
  | 'authored_wordpress__PAGE____links___self'
  | 'authored_wordpress__PAGE____links___self___href'
  | 'authored_wordpress__PAGE____links___collection'
  | 'authored_wordpress__PAGE____links___collection___href'
  | 'authored_wordpress__PAGE____links___about'
  | 'authored_wordpress__PAGE____links___about___href'
  | 'authored_wordpress__PAGE____links___author'
  | 'authored_wordpress__PAGE____links___author___embeddable'
  | 'authored_wordpress__PAGE____links___author___href'
  | 'authored_wordpress__PAGE____links___replies'
  | 'authored_wordpress__PAGE____links___replies___embeddable'
  | 'authored_wordpress__PAGE____links___replies___href'
  | 'authored_wordpress__PAGE____links___version_history'
  | 'authored_wordpress__PAGE____links___version_history___count'
  | 'authored_wordpress__PAGE____links___version_history___href'
  | 'authored_wordpress__PAGE____links___predecessor_version'
  | 'authored_wordpress__PAGE____links___predecessor_version___wordpress_id'
  | 'authored_wordpress__PAGE____links___predecessor_version___href'
  | 'authored_wordpress__PAGE____links___up'
  | 'authored_wordpress__PAGE____links___up___embeddable'
  | 'authored_wordpress__PAGE____links___up___href'
  | 'authored_wordpress__PAGE____links___wp_attachment'
  | 'authored_wordpress__PAGE____links___wp_attachment___href'
  | 'authored_wordpress__PAGE____links___curies'
  | 'authored_wordpress__PAGE____links___curies___name'
  | 'authored_wordpress__PAGE____links___curies___href'
  | 'authored_wordpress__PAGE____links___curies___templated'
  | 'authored_wordpress__PAGE___path'
  | 'authored_wordpress__wp_media'
  | 'authored_wordpress__wp_media___id'
  | 'authored_wordpress__wp_media___parent___id'
  | 'authored_wordpress__wp_media___parent___parent___id'
  | 'authored_wordpress__wp_media___parent___parent___children'
  | 'authored_wordpress__wp_media___parent___children'
  | 'authored_wordpress__wp_media___parent___children___id'
  | 'authored_wordpress__wp_media___parent___children___children'
  | 'authored_wordpress__wp_media___parent___internal___content'
  | 'authored_wordpress__wp_media___parent___internal___contentDigest'
  | 'authored_wordpress__wp_media___parent___internal___description'
  | 'authored_wordpress__wp_media___parent___internal___fieldOwners'
  | 'authored_wordpress__wp_media___parent___internal___ignoreType'
  | 'authored_wordpress__wp_media___parent___internal___mediaType'
  | 'authored_wordpress__wp_media___parent___internal___owner'
  | 'authored_wordpress__wp_media___parent___internal___type'
  | 'authored_wordpress__wp_media___children'
  | 'authored_wordpress__wp_media___children___id'
  | 'authored_wordpress__wp_media___children___parent___id'
  | 'authored_wordpress__wp_media___children___parent___children'
  | 'authored_wordpress__wp_media___children___children'
  | 'authored_wordpress__wp_media___children___children___id'
  | 'authored_wordpress__wp_media___children___children___children'
  | 'authored_wordpress__wp_media___children___internal___content'
  | 'authored_wordpress__wp_media___children___internal___contentDigest'
  | 'authored_wordpress__wp_media___children___internal___description'
  | 'authored_wordpress__wp_media___children___internal___fieldOwners'
  | 'authored_wordpress__wp_media___children___internal___ignoreType'
  | 'authored_wordpress__wp_media___children___internal___mediaType'
  | 'authored_wordpress__wp_media___children___internal___owner'
  | 'authored_wordpress__wp_media___children___internal___type'
  | 'authored_wordpress__wp_media___internal___content'
  | 'authored_wordpress__wp_media___internal___contentDigest'
  | 'authored_wordpress__wp_media___internal___description'
  | 'authored_wordpress__wp_media___internal___fieldOwners'
  | 'authored_wordpress__wp_media___internal___ignoreType'
  | 'authored_wordpress__wp_media___internal___mediaType'
  | 'authored_wordpress__wp_media___internal___owner'
  | 'authored_wordpress__wp_media___internal___type'
  | 'authored_wordpress__wp_media___wordpress_id'
  | 'authored_wordpress__wp_media___date'
  | 'authored_wordpress__wp_media___modified'
  | 'authored_wordpress__wp_media___slug'
  | 'authored_wordpress__wp_media___status'
  | 'authored_wordpress__wp_media___type'
  | 'authored_wordpress__wp_media___link'
  | 'authored_wordpress__wp_media___title'
  | 'authored_wordpress__wp_media___comment_status'
  | 'authored_wordpress__wp_media___ping_status'
  | 'authored_wordpress__wp_media___template'
  | 'authored_wordpress__wp_media___description'
  | 'authored_wordpress__wp_media___caption'
  | 'authored_wordpress__wp_media___alt_text'
  | 'authored_wordpress__wp_media___media_type'
  | 'authored_wordpress__wp_media___mime_type'
  | 'authored_wordpress__wp_media___media_details___width'
  | 'authored_wordpress__wp_media___media_details___height'
  | 'authored_wordpress__wp_media___media_details___file'
  | 'authored_wordpress__wp_media___media_details___image_meta___aperture'
  | 'authored_wordpress__wp_media___media_details___image_meta___credit'
  | 'authored_wordpress__wp_media___media_details___image_meta___camera'
  | 'authored_wordpress__wp_media___media_details___image_meta___caption'
  | 'authored_wordpress__wp_media___media_details___image_meta___created_timestamp'
  | 'authored_wordpress__wp_media___media_details___image_meta___copyright'
  | 'authored_wordpress__wp_media___media_details___image_meta___focal_length'
  | 'authored_wordpress__wp_media___media_details___image_meta___iso'
  | 'authored_wordpress__wp_media___media_details___image_meta___shutter_speed'
  | 'authored_wordpress__wp_media___media_details___image_meta___title'
  | 'authored_wordpress__wp_media___media_details___image_meta___orientation'
  | 'authored_wordpress__wp_media___source_url'
  | 'authored_wordpress__wp_media___author___id'
  | 'authored_wordpress__wp_media___author___parent___id'
  | 'authored_wordpress__wp_media___author___parent___children'
  | 'authored_wordpress__wp_media___author___children'
  | 'authored_wordpress__wp_media___author___children___id'
  | 'authored_wordpress__wp_media___author___children___children'
  | 'authored_wordpress__wp_media___author___internal___content'
  | 'authored_wordpress__wp_media___author___internal___contentDigest'
  | 'authored_wordpress__wp_media___author___internal___description'
  | 'authored_wordpress__wp_media___author___internal___fieldOwners'
  | 'authored_wordpress__wp_media___author___internal___ignoreType'
  | 'authored_wordpress__wp_media___author___internal___mediaType'
  | 'authored_wordpress__wp_media___author___internal___owner'
  | 'authored_wordpress__wp_media___author___internal___type'
  | 'authored_wordpress__wp_media___author___wordpress_id'
  | 'authored_wordpress__wp_media___author___name'
  | 'authored_wordpress__wp_media___author___url'
  | 'authored_wordpress__wp_media___author___description'
  | 'authored_wordpress__wp_media___author___link'
  | 'authored_wordpress__wp_media___author___slug'
  | 'authored_wordpress__wp_media___author___avatar_urls___wordpress_24'
  | 'authored_wordpress__wp_media___author___avatar_urls___wordpress_48'
  | 'authored_wordpress__wp_media___author___avatar_urls___wordpress_96'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___id'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___children'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___wordpress_id'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___date'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___guid'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___modified'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___slug'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___type'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___link'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___title'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___content'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___excerpt'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___comment_status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___ping_status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___sticky'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___template'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___format'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___categories'
  | 'authored_wordpress__wp_media___author___authored_wordpress__POST___path'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___id'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___children'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___wordpress_id'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___date'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___guid'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___modified'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___slug'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___type'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___link'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___title'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___content'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___excerpt'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___wordpress_parent'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___menu_order'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___comment_status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___ping_status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___template'
  | 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___path'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___id'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___children'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___wordpress_id'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___date'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___modified'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___slug'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___type'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___link'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___title'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___comment_status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___ping_status'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___template'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___description'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___caption'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___alt_text'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___media_type'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___mime_type'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___source_url'
  | 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___path'
  | 'authored_wordpress__wp_media___author____links___self'
  | 'authored_wordpress__wp_media___author____links___collection'
  | 'authored_wordpress__wp_media___author___path'
  | 'authored_wordpress__wp_media___guid___id'
  | 'authored_wordpress__wp_media___guid___parent___id'
  | 'authored_wordpress__wp_media___guid___parent___children'
  | 'authored_wordpress__wp_media___guid___children'
  | 'authored_wordpress__wp_media___guid___children___id'
  | 'authored_wordpress__wp_media___guid___children___children'
  | 'authored_wordpress__wp_media___guid___internal___content'
  | 'authored_wordpress__wp_media___guid___internal___contentDigest'
  | 'authored_wordpress__wp_media___guid___internal___description'
  | 'authored_wordpress__wp_media___guid___internal___fieldOwners'
  | 'authored_wordpress__wp_media___guid___internal___ignoreType'
  | 'authored_wordpress__wp_media___guid___internal___mediaType'
  | 'authored_wordpress__wp_media___guid___internal___owner'
  | 'authored_wordpress__wp_media___guid___internal___type'
  | 'authored_wordpress__wp_media___guid___wordpress_id'
  | 'authored_wordpress__wp_media___guid___date'
  | 'authored_wordpress__wp_media___guid___modified'
  | 'authored_wordpress__wp_media___guid___slug'
  | 'authored_wordpress__wp_media___guid___status'
  | 'authored_wordpress__wp_media___guid___type'
  | 'authored_wordpress__wp_media___guid___link'
  | 'authored_wordpress__wp_media___guid___title'
  | 'authored_wordpress__wp_media___guid___comment_status'
  | 'authored_wordpress__wp_media___guid___ping_status'
  | 'authored_wordpress__wp_media___guid___template'
  | 'authored_wordpress__wp_media___guid___description'
  | 'authored_wordpress__wp_media___guid___caption'
  | 'authored_wordpress__wp_media___guid___alt_text'
  | 'authored_wordpress__wp_media___guid___media_type'
  | 'authored_wordpress__wp_media___guid___mime_type'
  | 'authored_wordpress__wp_media___guid___media_details___width'
  | 'authored_wordpress__wp_media___guid___media_details___height'
  | 'authored_wordpress__wp_media___guid___media_details___file'
  | 'authored_wordpress__wp_media___guid___source_url'
  | 'authored_wordpress__wp_media___guid___author___id'
  | 'authored_wordpress__wp_media___guid___author___children'
  | 'authored_wordpress__wp_media___guid___author___wordpress_id'
  | 'authored_wordpress__wp_media___guid___author___name'
  | 'authored_wordpress__wp_media___guid___author___url'
  | 'authored_wordpress__wp_media___guid___author___description'
  | 'authored_wordpress__wp_media___guid___author___link'
  | 'authored_wordpress__wp_media___guid___author___slug'
  | 'authored_wordpress__wp_media___guid___author___authored_wordpress__POST'
  | 'authored_wordpress__wp_media___guid___author___authored_wordpress__PAGE'
  | 'authored_wordpress__wp_media___guid___author___authored_wordpress__wp_media'
  | 'authored_wordpress__wp_media___guid___author___path'
  | 'authored_wordpress__wp_media___guid___guid___id'
  | 'authored_wordpress__wp_media___guid___guid___children'
  | 'authored_wordpress__wp_media___guid___guid___wordpress_id'
  | 'authored_wordpress__wp_media___guid___guid___date'
  | 'authored_wordpress__wp_media___guid___guid___modified'
  | 'authored_wordpress__wp_media___guid___guid___slug'
  | 'authored_wordpress__wp_media___guid___guid___status'
  | 'authored_wordpress__wp_media___guid___guid___type'
  | 'authored_wordpress__wp_media___guid___guid___link'
  | 'authored_wordpress__wp_media___guid___guid___title'
  | 'authored_wordpress__wp_media___guid___guid___comment_status'
  | 'authored_wordpress__wp_media___guid___guid___ping_status'
  | 'authored_wordpress__wp_media___guid___guid___template'
  | 'authored_wordpress__wp_media___guid___guid___description'
  | 'authored_wordpress__wp_media___guid___guid___caption'
  | 'authored_wordpress__wp_media___guid___guid___alt_text'
  | 'authored_wordpress__wp_media___guid___guid___media_type'
  | 'authored_wordpress__wp_media___guid___guid___mime_type'
  | 'authored_wordpress__wp_media___guid___guid___source_url'
  | 'authored_wordpress__wp_media___guid___guid___path'
  | 'authored_wordpress__wp_media___guid___localFile___sourceInstanceName'
  | 'authored_wordpress__wp_media___guid___localFile___absolutePath'
  | 'authored_wordpress__wp_media___guid___localFile___relativePath'
  | 'authored_wordpress__wp_media___guid___localFile___extension'
  | 'authored_wordpress__wp_media___guid___localFile___size'
  | 'authored_wordpress__wp_media___guid___localFile___prettySize'
  | 'authored_wordpress__wp_media___guid___localFile___modifiedTime'
  | 'authored_wordpress__wp_media___guid___localFile___accessTime'
  | 'authored_wordpress__wp_media___guid___localFile___changeTime'
  | 'authored_wordpress__wp_media___guid___localFile___birthTime'
  | 'authored_wordpress__wp_media___guid___localFile___root'
  | 'authored_wordpress__wp_media___guid___localFile___dir'
  | 'authored_wordpress__wp_media___guid___localFile___base'
  | 'authored_wordpress__wp_media___guid___localFile___ext'
  | 'authored_wordpress__wp_media___guid___localFile___name'
  | 'authored_wordpress__wp_media___guid___localFile___relativeDirectory'
  | 'authored_wordpress__wp_media___guid___localFile___dev'
  | 'authored_wordpress__wp_media___guid___localFile___mode'
  | 'authored_wordpress__wp_media___guid___localFile___nlink'
  | 'authored_wordpress__wp_media___guid___localFile___uid'
  | 'authored_wordpress__wp_media___guid___localFile___gid'
  | 'authored_wordpress__wp_media___guid___localFile___rdev'
  | 'authored_wordpress__wp_media___guid___localFile___ino'
  | 'authored_wordpress__wp_media___guid___localFile___atimeMs'
  | 'authored_wordpress__wp_media___guid___localFile___mtimeMs'
  | 'authored_wordpress__wp_media___guid___localFile___ctimeMs'
  | 'authored_wordpress__wp_media___guid___localFile___atime'
  | 'authored_wordpress__wp_media___guid___localFile___mtime'
  | 'authored_wordpress__wp_media___guid___localFile___ctime'
  | 'authored_wordpress__wp_media___guid___localFile___birthtime'
  | 'authored_wordpress__wp_media___guid___localFile___birthtimeMs'
  | 'authored_wordpress__wp_media___guid___localFile___blksize'
  | 'authored_wordpress__wp_media___guid___localFile___blocks'
  | 'authored_wordpress__wp_media___guid___localFile___url'
  | 'authored_wordpress__wp_media___guid___localFile___id'
  | 'authored_wordpress__wp_media___guid___localFile___children'
  | 'authored_wordpress__wp_media___guid____links___self'
  | 'authored_wordpress__wp_media___guid____links___collection'
  | 'authored_wordpress__wp_media___guid____links___about'
  | 'authored_wordpress__wp_media___guid____links___author'
  | 'authored_wordpress__wp_media___guid____links___replies'
  | 'authored_wordpress__wp_media___guid___path'
  | 'authored_wordpress__wp_media___localFile___sourceInstanceName'
  | 'authored_wordpress__wp_media___localFile___absolutePath'
  | 'authored_wordpress__wp_media___localFile___relativePath'
  | 'authored_wordpress__wp_media___localFile___extension'
  | 'authored_wordpress__wp_media___localFile___size'
  | 'authored_wordpress__wp_media___localFile___prettySize'
  | 'authored_wordpress__wp_media___localFile___modifiedTime'
  | 'authored_wordpress__wp_media___localFile___accessTime'
  | 'authored_wordpress__wp_media___localFile___changeTime'
  | 'authored_wordpress__wp_media___localFile___birthTime'
  | 'authored_wordpress__wp_media___localFile___root'
  | 'authored_wordpress__wp_media___localFile___dir'
  | 'authored_wordpress__wp_media___localFile___base'
  | 'authored_wordpress__wp_media___localFile___ext'
  | 'authored_wordpress__wp_media___localFile___name'
  | 'authored_wordpress__wp_media___localFile___relativeDirectory'
  | 'authored_wordpress__wp_media___localFile___dev'
  | 'authored_wordpress__wp_media___localFile___mode'
  | 'authored_wordpress__wp_media___localFile___nlink'
  | 'authored_wordpress__wp_media___localFile___uid'
  | 'authored_wordpress__wp_media___localFile___gid'
  | 'authored_wordpress__wp_media___localFile___rdev'
  | 'authored_wordpress__wp_media___localFile___ino'
  | 'authored_wordpress__wp_media___localFile___atimeMs'
  | 'authored_wordpress__wp_media___localFile___mtimeMs'
  | 'authored_wordpress__wp_media___localFile___ctimeMs'
  | 'authored_wordpress__wp_media___localFile___atime'
  | 'authored_wordpress__wp_media___localFile___mtime'
  | 'authored_wordpress__wp_media___localFile___ctime'
  | 'authored_wordpress__wp_media___localFile___birthtime'
  | 'authored_wordpress__wp_media___localFile___birthtimeMs'
  | 'authored_wordpress__wp_media___localFile___blksize'
  | 'authored_wordpress__wp_media___localFile___blocks'
  | 'authored_wordpress__wp_media___localFile___url'
  | 'authored_wordpress__wp_media___localFile___id'
  | 'authored_wordpress__wp_media___localFile___parent___id'
  | 'authored_wordpress__wp_media___localFile___parent___children'
  | 'authored_wordpress__wp_media___localFile___children'
  | 'authored_wordpress__wp_media___localFile___children___id'
  | 'authored_wordpress__wp_media___localFile___children___children'
  | 'authored_wordpress__wp_media___localFile___internal___content'
  | 'authored_wordpress__wp_media___localFile___internal___contentDigest'
  | 'authored_wordpress__wp_media___localFile___internal___description'
  | 'authored_wordpress__wp_media___localFile___internal___fieldOwners'
  | 'authored_wordpress__wp_media___localFile___internal___ignoreType'
  | 'authored_wordpress__wp_media___localFile___internal___mediaType'
  | 'authored_wordpress__wp_media___localFile___internal___owner'
  | 'authored_wordpress__wp_media___localFile___internal___type'
  | 'authored_wordpress__wp_media____links___self'
  | 'authored_wordpress__wp_media____links___self___href'
  | 'authored_wordpress__wp_media____links___collection'
  | 'authored_wordpress__wp_media____links___collection___href'
  | 'authored_wordpress__wp_media____links___about'
  | 'authored_wordpress__wp_media____links___about___href'
  | 'authored_wordpress__wp_media____links___author'
  | 'authored_wordpress__wp_media____links___author___embeddable'
  | 'authored_wordpress__wp_media____links___author___href'
  | 'authored_wordpress__wp_media____links___replies'
  | 'authored_wordpress__wp_media____links___replies___embeddable'
  | 'authored_wordpress__wp_media____links___replies___href'
  | 'authored_wordpress__wp_media___path'
  | '_links___self'
  | '_links___self___href'
  | '_links___collection'
  | '_links___collection___href'
  | 'path';

export type Wordpress__Wp_UsersFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_UrlsFilterInput>;
  authored_wordpress__POST?: Maybe<Wordpress__PostFilterListInput>;
  authored_wordpress__PAGE?: Maybe<Wordpress__PageFilterListInput>;
  authored_wordpress__wp_media?: Maybe<Wordpress__Wp_MediaFilterListInput>;
  _links?: Maybe<Wordpress__Wp_Users_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_UsersGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_UsersEdge>;
  nodes: Array<Wordpress__Wp_Users>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_UsersSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_UsersFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allWordpressPage: { edges: Array<{ node: Pick<Wordpress__Page, 'title' | 'slug'> }> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { wordpressSiteMetadata?: Maybe<Pick<Wordpress__Site_Metadata, 'name'>> };

export type SinglePageQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type SinglePageQuery = { wordpressPage?: Maybe<Pick<Wordpress__Page, 'id' | 'slug' | 'title' | 'content'>> };

export type SinglePostQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type SinglePostQuery = { wordpressPost?: Maybe<Pick<Wordpress__Post, 'id' | 'slug' | 'title' | 'content'>> };

export type IndexQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type IndexQuery = { wordpressSiteMetadata?: Maybe<Pick<Wordpress__Site_Metadata, 'id' | 'home' | 'description' | 'name' | 'url'>>, allWordpressPost: { edges: Array<{ node: Pick<Wordpress__Post, 'title' | 'excerpt' | 'slug' | 'date' | 'modified'> }> } };
