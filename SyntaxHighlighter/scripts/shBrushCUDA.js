SyntaxHighlighter.brushes.CUDA = function()
{
  var keywords = 'volatile extern void unsigned int float char bool template uint uchar const ' +
                  'sizeof switch case true false size_t break if else for while typedef return namespace ' +
                  'dim1 dim2 dim3 dim4 texture struct enum continue do ' +
                  'char1 uchar1 char2 uchar2 char3 uchar3 char4 uchar4 ' +
                  'short1 ushort1 short2 ushort2 short3 ushort3 short4 ushort4 ' +
                  'int1 uint1 int2 uint2 int3 uint3 int4 uint4 ' +
                  'long1 ulong1 long2 ulong2 long3 ulong3 long4 ulong4 ' +
                  'longlong1 longlong2 float1 float2 float3 float4 double1 double2 tex1Dfetch tex1D tex2D tex3D ' +
                  '__syncthreads __threadfence __threadfence_block __global__ __constant__ __device__ __shared__ __host__';
                  
  var constants = 'gridDim blockIdx blockDim threadIdx warpSize';

  var bifns     = 'min umin fminf fmin max umax fmaxf fmax abs fabsf fabs rsqrtf rsqrt sqrtf sqrt ' +
                  '__sinf sinf sin __cosf cosf cos __sincosf sincosf sincos __expf expf exp __logf logf log';
  
	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings

		{ regex: /cuda[A-Za-z0-9]+/g,		css: 'functions' }, // this is a catch-all for the cuda...() library functions
		{ regex: /cutil[A-Za-z0-9]+/g,		css: 'functions' }, // this is a catch-all for the cuda...() library functions
		{ regex: /make_[\w]+/g,		css: 'constants' }, 
    
		{ regex: /(&lt;&lt;&lt;|&gt;&gt;&gt;)/g,	  css: 'constants' },
		{ regex: /\b([\d]+(\.[\d]+(f{0,1}))?|0x[a-f0-9]+)\b/gi,				css: 'numconst' },			// numbers
		{ regex: /^ *#.*/gm,										css: 'preprocessor' },    
		{ regex: new RegExp(this.getKeywords(bifns), 'gm'),		css: 'functions' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },
		{ regex: new RegExp(this.getKeywords(constants), 'gm'),		css: 'constants' },
		{ regex: /\w+(?=\()/g,		    css: 'color1' },
		];
    
};

SyntaxHighlighter.brushes.CUDA.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CUDA.aliases	= ['cuda'];
