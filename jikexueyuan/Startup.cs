using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(jikexueyuan.Startup))]
namespace jikexueyuan
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
