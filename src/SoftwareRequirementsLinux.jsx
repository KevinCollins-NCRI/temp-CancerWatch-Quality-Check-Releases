export default function SoftwareRequirementsLinux() {
    return (<>
              <p>
                <em>Distribution:</em> a desktop distribution based on glibc that .NET 10 supports, for example 
              </p>
              <ul>
                <li>Ubuntu 22.04 or 24.04</li>
                <li>Debian 12 or later</li>
                <li>Fedora</li>
                <li>RHEL 8/9/10</li>
                <li>openSUSE Leap 15.6</li>
              </ul>
              <p>&#x26A0; Alpine and other musl-based distributions won't work, because the build targets glibc.</p>
              <p>
                <em>Graphical desktop:</em> X11 or Wayland. The app can't run on a headless server.
              </p>
              <p>
                <em>Required packages:</em>
              </p>
              <ul>
                <li>libwebkit2gtk-4.1 and GTK 3, needed to draw the window (Ubuntu/Debian: libwebkit2gtk-4.1-0)</li>
                <li>libicu, needed by .NET for regional formatting, because the app doesn't switch that feature off (Ubuntu/Debian: libicu74 or whichever version the distribution provides)</li>
              </ul>
              <p>
                Some distributions need FUSE 2 (libfuse2) to run AppImages, and newer Ubuntu releases don't install it by default. The file also has to be marked as executable <span className='code'>(chmod +x)</span>.
              </p>
    </>)
}